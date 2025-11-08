//import { PaymentStatus } from '@prisma/client';
export interface ICreatePaymentIntent {
  userId: number;
  orderId: number;
  currency: string;
  amount: number;
  stripePaymentIntentId: string;
  //status: PaymentStatus;
}
