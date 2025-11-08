import { IsEnum } from 'class-validator';
import { IUpdateStatus } from '../interfaces/updateStatus.interface';
import { PaymentStatus } from '@prisma/client';

export class UpdateStatusDto implements IUpdateStatus {
  @IsEnum(PaymentStatus)
  status!: PaymentStatus;
}
