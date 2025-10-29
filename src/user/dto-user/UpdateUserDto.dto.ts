import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
} from 'class-validator';
export class UpdateUserDto {
  @IsNotEmpty()
  @IsString()
  firstname!: string;

  @IsNotEmpty()
  @IsString()
  secondname!: string;

  @IsNotEmpty()
  @IsEmail()
  email!: string;

  @IsNotEmpty()
  @IsString()
  role!: 'USER' | 'ADMIN';

  @IsNotEmpty()
  @MinLength(6, {
    message: 'Password Length Must Be Min 6 Charcters',
  })
  @IsString()
  password!: string;

  @IsOptional()
  createdAt?: Date;

  @IsOptional()
  updatedAt?: Date;
}



//Определение UpdateUserDto дано как PartialType.CreateUserDto. Поэтому оно может обладать всеми свойствами CreateUserDto.
// src/articles/dto/update-article.dto.ts
// import { PartialType } from '@nestjs/swagger';
// import { CreateArticleDto } from './create-article.dto';
// export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
