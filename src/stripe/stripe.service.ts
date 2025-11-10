import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
  //Req,
  // Res,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { ICreatePaymentIntent } from './interfaces/createPaymentIntent.interface';
import { Payment } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { StripeDataService } from './stripe.data-service';

@Injectable()
export default class StripeService {
  private stripe: Stripe;
  private endpointSecret: string;

  constructor(
    private configService: ConfigService,
    private readonly prisma: PrismaService,
    private readonly stripeDataService: StripeDataService,
  ) {
    const stripeKey = this.configService.get<string>('STRIPE_SECRET_KEY');
    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
    }
    this.stripe = new Stripe(stripeKey, {
      apiVersion: '2025-10-29.clover',
    });
    const endpointSecret = this.configService.get<string>(
      'STRIPE_WEBHOOK_SECRET',
    );
    if (!endpointSecret) {
      throw new Error(
        'STRIPE_WEBHOOK_SECRET is not set in environment variables',
      );
    }
    this.endpointSecret = endpointSecret;
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

  //  async handleStripeWebhook(@Req() req: Request, @Res() res: Response) {
  //     let event = req.body;
  //     if (endpointSecret) {
  //       // Get the signature sent by Stripe
  //       const signature = req.headers['stripe-signature'];
  //       try {
  //         event = stripe.webhooks.constructEvent(
  //           req.body,
  //           signature,
  //           endpointSecret
  //         );
  //       } catch (err) {
  //         console.log(`⚠️ Webhook signature verification failed.`, err.message);
  //         return res.sendStatus(400);
  //       }
  //       // Handle the event
  //       switch (event.type) {
  //         case 'payment_intent.succeeded':
  //           const paymentIntent = event.data.object;
  //           // Then define and call a method to handle the successful payment intent.
  //           // handlePaymentIntentSucceeded(paymentIntent);
  //           break;
  //         case 'payment_method.attached':
  //           const paymentMethod = event.data.object;
  //           // Then define and call a method to handle the successful attachment of a PaymentMethod.
  //           // handlePaymentMethodAttached(paymentMethod);
  //           break;
  //         // ... handle other event types
  //         default:
  //           console.log(`Unhandled event type ${event.type}`);
  //       }

  //       // Return a response to acknowledge receipt of the event
  //       response.json({ received: true });
  //     }

  //   }
}
