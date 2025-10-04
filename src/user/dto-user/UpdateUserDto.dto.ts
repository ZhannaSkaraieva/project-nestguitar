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
