import { IsNotEmpty, IsNumber } from 'class-validator';
import { IOrderItem } from '../interfaces/createOrder.interface';

export class OrderItemDto implements IOrderItem {
  @IsNotEmpty()
  @IsNumber()
  productId!: number;

  @IsNotEmpty()
  @IsNumber()
  quantity!: number;
}
//stripe
