import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { User } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    passwordFromLogin: string,
  ): Promise<{ access_token: string }> {
    //Проверяю пользователя с таким email
    const user: User | null = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new UnauthorizedException('USER_NOT_FOUND');
    }
    const match = await bcrypt.compare(passwordFromLogin, user.password); //сравнение, проверка
    if (!match) {
      throw new UnauthorizedException('INVALID_PASSWORD');
    }
    // если прошла проверка достаю id , email и отправляю с токином
    const payload = {
      sub: user.id,
      email: user.email,
    };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}

//POST http://localhost:3000/auth/login
