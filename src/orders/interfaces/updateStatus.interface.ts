import { PaymentStatus } from '@prisma/client';
export interface IUpdateStatus {
  status: PaymentStatus;
}
