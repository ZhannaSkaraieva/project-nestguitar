import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { ICreatePayment } from './interfaces/createPayment.interface';
import { Payment } from '@prisma/client';

@Injectable()
export default class StripeService {
  private stripe: Stripe;

  constructor(private configService: ConfigService) {
    const stripeKey = process.env.STRIPE_SECRET_KEY;
    if (!stripeKey) {
      throw new Error('STRIPE_SECRET_KEY is not set in environment variables');
    }
    this.stripe = new Stripe(stripeKey, {
      apiVersion: '2025-10-29.clover',
    });
  }

  async create(data: ICreatePayment): Promise<Payment> {
    const { orderId, userId, currency, amount } = data;

    const order = await this.stripe.find
    if (!orderId) {
      new NotFoundException('Order not found'); //check doc about NotFoundException
    }
      

    return await this.stripe.create({
      data: {},
    });
  }
}
