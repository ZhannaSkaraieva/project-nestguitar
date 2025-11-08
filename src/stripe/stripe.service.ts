import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
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
  }

  //инициирования платежа. Она сообщает Stripe сумму платежа и его валюту.
  async createPaymentIntent(data: ICreatePaymentIntent): Promise<Payment> {
    const { orderId, currency, amount } = data;

    const order = await this.prisma.order.findUnique({
      where: { id: orderId },
    });
    if (!order) {
      throw new NotFoundException('ORDER_NOT_FOUND'); //check doc about NotFoundException
    }
    try {
      const paymentIntent = await this.stripe.paymentIntents.create({
        //намерение платежа
        amount: amount,
        currency: currency,
        metadata: { orderId }, //Связанные идентификаторы : прикрепите уникальные идентификаторы вашей системы к объекту Stripe для упрощения поиска.
      });

      const payment = await this.stripeDataService.createPayment({
        orderId,
        userId: order.userId,
        stripePaymentIntentId: paymentIntent.id,
        amount,
        currency,
      });
      return payment;
    } catch {
      throw new InternalServerErrorException('ERROR_CREATING_PAYMENT_INTENT');
    }
  }
}
