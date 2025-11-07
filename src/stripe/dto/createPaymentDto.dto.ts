import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ICreatePayment } from '../interfaces/createPayment.interface';

export class CreatePaymentDto implements ICreatePayment {
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
}
