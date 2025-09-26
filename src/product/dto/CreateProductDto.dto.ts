import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class CreateProductDto {
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

  @IsNumber()
  @Min(0.0)
  price: number = 0;

  @IsBoolean()
  enabled: boolean = true;

  @IsOptional()
  @IsString()
  image?: string;

  @IsNumber()
  quantity: number = 0;
}

// {
//   "title": "Fender Stratocaster",
//   "vendorCode": "FND12345",
//   "reviews": "",
//   "rating": 5,
//   "article": "FSTRAT2025",
//   "type": "Электрогитара",
//   "strings": 6,
//   "description": "Легендарная гитара Fender Stratocaster.",
//   "price": 25000,
//   "stocked": true,
//   "image": "/image/fender.png",
//   "quantity": 10
// }
