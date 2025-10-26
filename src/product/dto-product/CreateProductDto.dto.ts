//объекта передачи данных (DTO). Он определяет формат данных, отправляемых в запросе на создание нового продукта.
//проверка входных данных
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

  @IsOptional()
  @IsNumber()
  @Min(0.0)
  price: number = 0;

  @IsBoolean()
  enabled: boolean = false;

  @IsOptional()
  @IsString()
  image?: string;

  @IsNumber()
  quantity: number = 0;

  // @IsOptional()
  // createdAt?: Date;

  // @IsOptional()
  // updatedAt?: Date;
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

//Что такое DTO?
//DTO — это классы, определяющие структуру и правила проверки данных, передаваемых между клиентом и сервером. Они используются для:

//Проверка входных данных : обеспечение соответствия входящих данных (например, полезных данных запроса POST) требованиям.
//Форма выходных данных : управление тем, какие данные отправляются обратно клиенту.
//Инкапсуляция данных : разделяйте контракты API от внутренних моделей.
//DTO обычно используются в паре с class-validatorдля проверки во время выполнения. Например, a CreateUserDtoгарантирует корректность адреса электронной почты и соответствие пароля требованиям к длине.
//
