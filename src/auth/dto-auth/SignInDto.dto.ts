import { IsNotEmpty, IsString, IsEmail } from 'class-validator';
export class SingInDto {
  @IsNotEmpty({ message: 'Please Enter your Email' })
  @IsEmail({}, { message: 'Please Enter a Valid Email' })
  email!: string;

  @IsNotEmpty({ message: 'Please Enter your Password' })
  @IsString()
  password!: string;
}
