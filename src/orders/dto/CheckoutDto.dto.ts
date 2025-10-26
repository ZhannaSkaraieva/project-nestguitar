import { IsNotEmpty, IsNumber, IsInt } from 'class-validator';

export class CheckoutDto {
  @IsNotEmpty()
  @IsInt()
  userId?: number;

  @IsNotEmpty()
  @IsNumber()
  products?: number;

  @IsNotEmpty()
  @IsNumber()
  totalPrice?: number;
}
