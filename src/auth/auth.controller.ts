import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  //UseGuards,
  Get,
  Request as Req,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { SingInDto } from './dto-auth/SignInDto.dto';
//import { AuthGuard } from './auth.guard';
import { Public } from './public.decorator';
import type { Request as ExpressReques } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() dto: SingInDto) {
    return this.authService.signIn(dto.email, dto.password);
  }

  //
  //@UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() req: ExpressReques) {
    return req.user;
  }
}
