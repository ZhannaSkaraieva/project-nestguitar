import { IsBoolean, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateGuitarDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  vendorCode: string;

  @IsString()
  reviews: string;

  @IsNumber()
  rating: number;

  @IsString()
  article: string;

  @IsString()
  type: string;

  @IsNumber()
  strings: number;

  @IsString()
  description: string;

  @IsNumber()
  price: number;

  @IsBoolean()
  stocked: boolean;

  @IsString()
  image: string;

  @IsNumber()
  quantity: number;
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
