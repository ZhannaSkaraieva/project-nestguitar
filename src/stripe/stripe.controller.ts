import { Body, Controller, Post } from '@nestjs/common';
import StripeService from './stripe.service';
import { Public } from 'src/auth/public.decorator';
import { CreatePaymentIntentDto } from './dto/createPaymentIntentDto.dto';
import { Payment } from '@prisma/client';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Public()
  @Post()
  async createPaymentIntent(
    @Body() dto: CreatePaymentIntentDto,
  ): Promise<{ clientSecret: string | null; payment: Payment }> {
    const result = await this.stripeService.createPayment(dto);
    return result;
  }

  // @Public()
  // @Post('webhook')
  // async handleStripeWebhook(event) {}
}
