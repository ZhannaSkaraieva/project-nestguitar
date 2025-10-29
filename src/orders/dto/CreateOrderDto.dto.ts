import { Type } from 'class-transformer';
import {
  IsNotEmpty,
  IsNumber,
  IsArray,
  IsString,
  IsOptional,
  ValidateNested,
  ArrayNotEmpty,
} from 'class-validator';
import { OrderItemDto } from './OrderItemDto.dto';

export class CreateOrderDto {
  [x: string]: any;
  @IsOptional()
  userId!: number;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => OrderItemDto)
  orderItem!: OrderItemDto[];

  @IsNotEmpty()
  @IsNumber()
  totalPrice!: number;

  @IsNotEmpty()
  @IsString()
  status!: string;
}
export { OrderItemDto };
