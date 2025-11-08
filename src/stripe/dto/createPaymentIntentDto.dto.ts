import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ICreatePaymentIntent } from '../interfaces/createPaymentIntent.interface';
//import { IsEnum } from 'class-validator';
//import { PaymentStatus } from '@prisma/client';

export class CreatePaymentIntentDto implements ICreatePaymentIntent {
  @IsNotEmpty()
  @IsNumber()
  userId!: number;
  @IsNotEmpty()
  @IsNumber()
  orderId!: number;

  @IsNotEmpty()
  @IsString()
  currency!: string;

  @IsNotEmpty()
  @IsNumber()
  amount!: number;

  @IsNotEmpty()
  @IsString()
  stripePaymentIntentId!: string;

  // @IsNotEmpty()
  // @IsEnum(PaymentStatus)
  // status!: PaymentStatus;
}
