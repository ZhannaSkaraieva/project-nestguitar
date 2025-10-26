import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { ReviewsModule } from './reviews/reviews.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    ProductModule,
    UserModule,
    AuthModule,
    CartModule,
    OrdersModule,
    ReviewsModule,
  ], // імпортуємо модуль GuitarModule, добавляется автоматически при создании сущности
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
