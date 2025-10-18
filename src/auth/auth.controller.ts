import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  UseGuards,
  Get,
  Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingInDto } from './dto-auth/SignInDto.dto';
import { AuthGuard } from './auth.guard';
import type { Request } from 'express';

interface JwtPayload {
  sub: number;
  email: string;
  [key: string]: unknown;
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() dto: SingInDto) {
    return this.authService.signIn(dto.email, dto.password);
  }

  //
  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req: Request & { user?: JwtPayload }) {
    return req.user;
  }
}
