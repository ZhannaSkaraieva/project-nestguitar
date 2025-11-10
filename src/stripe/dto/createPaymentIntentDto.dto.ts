import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ICreatePaymentIntent } from '../interfaces/createPaymentIntent.interface';
import { Type } from 'class-transformer';
//import { IsEnum } from 'class-validator';
//import { PaymentStatus } from '@prisma/client';

export class CreatePaymentIntentDto implements ICreatePaymentIntent {
  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  userId!: number;

  @IsNotEmpty()
  @Type(() => Number)
  @IsNumber()
  orderId!: number;

  @IsNotEmpty()
  @IsString()
  currency!: string;

  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @IsOptional()
  @IsString()
  stripePaymentIntentId?: string;

  // @IsNotEmpty()
  // @IsEnum(PaymentStatus)
  // status!: PaymentStatus;
}
