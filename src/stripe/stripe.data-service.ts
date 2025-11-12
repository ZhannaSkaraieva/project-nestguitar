import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { ICreatePaymentIntent } from './interfaces/createPaymentIntent.interface';
import { Payment } from '@prisma/client';

@Injectable()
export class StripeDataService {
  constructor(private readonly prisma: PrismaService) {}

  async createPayment(data: ICreatePaymentIntent): Promise<Payment> {
    return await this.prisma.payment.create({
      data: {
        orderId: data.orderId,
        userId: data.userId,
        stripePaymentIntentId: data.stripePaymentIntentId || null,
        amount: data.amount,
        currency: data.currency,
        //status: data.status,
      },
    });
  }

  async updatePaymentStatus(
    stripePaymentIntentId: string,
    status: string,
  ): Promise<Payment> {
    return await this.prisma.payment.update({
      where: { stripePaymentIntentId },
      data: { status },
    });
  }
}
