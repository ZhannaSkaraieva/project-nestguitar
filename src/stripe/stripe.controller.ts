import { Body, Controller, Post, Req } from '@nestjs/common';
import StripeService from './stripe.service';
import { Public } from 'src/auth/public.decorator';
import { CreatePaymentIntentDto } from './dto/createPaymentIntentDto.dto';
import { Payment } from '@prisma/client';
import type { RawBodyRequest } from '@nestjs/common';

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

  @Post('webhook')
  async handleStripeWebhook(
    @Req() req: RawBodyRequest<Request>,
    //@Headers('stripe-signature') signature: string,
  ) {
    await this.stripeService.handleStripeWebhook(req);
    return { received: true };
  }
}
// Объяснение:
// @Post('webhook') конечная точка получает события веб-перехвата от Stripe.
// @Headers('stripe-signature')захватывает stripe-signature заголовок, отправленный Stripe для аутентификации.
// req.rawBody извлекает необработанное тело запроса, содержащее полезную нагрузку веб-перехватчика. см. src/main.ts
// stripe.webhooks.constructEvent проверяет подпись и преобразует полезную нагрузку в event объект.
