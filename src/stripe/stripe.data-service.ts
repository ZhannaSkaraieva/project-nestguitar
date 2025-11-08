import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICreatePaymentIntent } from './interfaces/createPaymentIntent.interface';
import { Payment } from '@prisma/client';

@Injectable()
export class StripeDataService {
  constructor(private readonly prisma: PrismaService) {}

  async createPayment(data: ICreatePaymentIntent): Promise<Payment> {
    return this.prisma.payment.create({
      data: {
        orderId: data.orderId,
        userId: data.userId,
        stripePaymentIntentId: data.stripePaymentIntentId,
        amount: data.amount,
        currency: data.currency,
        //status: data.status,
      },
    });
  }
}
