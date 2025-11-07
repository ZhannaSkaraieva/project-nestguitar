import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  ValidateNested,
  ArrayNotEmpty,
} from 'class-validator';
import { OrderItemDto } from './OrderItemDto.dto';
import { ICreateOrder } from '../interfaces/createOrder.interface';

export class CreateOrderDto implements ICreateOrder {
  @IsNotEmpty()
  @IsNumber()
  userId!: number;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  orderItem!: OrderItemDto[];

  // @IsNotEmpty()
  // @IsNumber()
  // totalPrice!: number;

  // @IsNotEmpty()
  // @IsString()
  // status!: string;
}
export { OrderItemDto };
