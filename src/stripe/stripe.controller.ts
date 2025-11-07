import { Body, Controller, Post } from '@nestjs/common';
import StripeService from './stripe.service';
import { Public } from 'src/auth/public.decorator';
import { CreatePaymentDto } from './dto/createPaymentDto.dto';
import { Payment } from '@prisma/client';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Public()
  @Post()
  async create(@Body() dto: CreatePaymentDto): Promise<Payment> {
    return await this.stripeService.create(dto);
  }
}
