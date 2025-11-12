import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  Req,
  Headers,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { ICreatePaymentIntent } from './interfaces/createPaymentIntent.interface';
import { Payment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { StripeDataService } from './stripe.data-service';
import type { RawBodyRequest } from '@nestjs/common';
import { request, response } from 'express';

@Injectable()
export default class StripeService {
  private stripe: Stripe;
  private endpointSecret: string | undefined;

  constructor(
    private configService: ConfigService,
    private readonly prisma: PrismaService,
    private readonly stripeDataService: StripeDataService,
  ) {
    const stripeKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
    }
    const endpointSecret = this.configService.get<string>(
      'STRIPE_WEBHOOK_SECRET',
    );
    if (!endpointSecret) {
      throw new Error(
        'STRIPE_WEBHOOK_SECRET is not set in environment variables',
      );
    }

    this.stripe = new Stripe(stripeKey, {
      apiVersion: '2025-10-29.clover',
    });
  }

  //инициирования платежа. Она сообщает Stripe сумму платежа и его валюту.
  async createPayment(
    data: ICreatePaymentIntent,
  ): Promise<{ clientSecret: string | null; payment: Payment }> {
    const { orderId, currency, amount } = data;

    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });
    if (!order) {
      throw new NotFoundException('ORDER_NOT_FOUND'); //check doc about NotFoundException
    }
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        //ThePaymentIntentобъект представляет ваше намерение получить оплату от клиента
        // и отслеживает попытки списания средств и изменения состояния на протяжении всего процесса оплаты.
        amount: amount,
        currency: currency,
        metadata: { orderId: order.id.toString() }, //Связанные идентификаторы : прикрепите уникальные идентификаторы вашей системы к объекту Stripe для упрощения поиска.
      });

      const payment = await this.stripeDataService.createPayment({
        orderId,
        userId: order.userId,
        stripePaymentIntentId: paymentIntent.id,
        amount,
        currency,
      });
      return {
        clientSecret: paymentIntent.client_secret,
        payment,
      };
    } catch {
      throw new InternalServerErrorException('ERROR_CREATING_PAYMENT_INTENT');
    }
  }

  async handleStripeWebhook(
    //@Headers('stripe-signature') signature: string, // Get the signature sent by Stripe
    @Req() req: RawBodyRequest<Request>,
  ) {
    let stripeEvent: Stripe.Event;
    const payload = req.rawBody;
    if (!payload) {
      throw new Error('Missing raw body for Stripe webhook');
    }
    if (this.endpointSecret) {
      const signature = request.headers['stripe-signature'];
      if (!signature || Array.isArray(signature)) {
        throw new Error('Invalid or missing Stripe signature');
      }
      try {
        stripeEvent = this.stripe.webhooks.constructEvent(
          payload,
          signature,
          this.endpointSecret,
        );
      } catch {
        return response
          .status(400)
          .send(`⚠️ Webhook signature verification failed.`);
      }

      if (stripeEvent.type === 'payment_intent.succeeded') {
        const paymentIntent = stripeEvent.data.object as Stripe.PaymentIntent;
        await this.stripeDataService.updatePaymentStatus(
          paymentIntent.id,
          'SUCCEEDED',
        );

        // Return a response to acknowledge receipt of the event
        response.json({ received: true });
      }
    }
  }
}
