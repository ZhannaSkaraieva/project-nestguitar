import {
  IsNotEmpty,
  IsString,
  IsEmail,
  MinLength,
  IsOptional,
} from 'class-validator';
import { CreateUser } from '../interfaces/user.interface';
export class CreateUserDto implements CreateUser {
  @IsNotEmpty({ message: 'Please Enter Full Name' })
  @IsString({ message: 'Please Enter Valid Name' })
  firstname!: string;

  @IsNotEmpty({ message: 'Please Enter Full Name' })
  @IsString({ message: 'Please Enter Valid Name' })
  secondname!: string;

  @IsNotEmpty({ message: 'Please Enter your Email' })
  @IsEmail({}, { message: 'Please Enter a Valid Email' })
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
