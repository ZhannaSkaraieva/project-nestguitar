import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import StripeService from './stripe.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { StripeDataService } from './stripe.data-service';

@Module({
  imports: [ConfigModule, PrismaModule],
  controllers: [StripeController],
  providers: [StripeService, PrismaService, StripeDataService],
})
export class StripeModule {}
