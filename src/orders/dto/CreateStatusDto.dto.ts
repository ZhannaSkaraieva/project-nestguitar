import { IsEnum } from 'class-validator';
import { PaymentStatus } from '../../generated/prisma/client';

export class CreateStatusDto {
  @IsEnum(PaymentStatus)
  status!: PaymentStatus;
}
