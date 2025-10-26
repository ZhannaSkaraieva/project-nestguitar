import { IsNotEmpty, IsInt, Min } from 'class-validator';
export class AddItemDto {
  @IsNotEmpty()
  @IsInt()
  cartId?: number;

  @IsNotEmpty()
  @IsInt()
  productId?: number;

  @IsNotEmpty()
  @IsInt()
  @Min(1)
  quantity?: number;
}
