import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class UpdateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string = '';

  @IsString()
  vendorCode: string = '';

  @IsOptional()
  @IsString()
  reviews?: string;

  @IsOptional()
  @IsNumber()
  rating?: number;

  @IsString()
  article: string = '';

  @IsString()
  type: string = '';
  @IsOptional()
  @IsNumber()
  properties?: Record<string, number>;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(0.0)
  price?: number;

  @IsBoolean()
  enabled: boolean = true;

  @IsOptional()
  @IsString()
  image?: string;

  @IsNumber()
  quantity?: number;

  // @IsOptional()
  // createdAt?: Date;

  // @IsOptional()
  // updatedAt?: Date;
}
