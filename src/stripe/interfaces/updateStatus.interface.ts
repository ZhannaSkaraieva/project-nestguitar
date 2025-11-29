import { PaymentStatus } from '../../generated/prisma/client';
export interface IUpdateStatus {
  status: PaymentStatus;
}
