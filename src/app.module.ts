import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { PrismaModule } from './prisma/prisma.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [ConfigModule.forRoot(), PrismaModule, ProductModule, UserModule, AuthModule], // імпортуємо модуль GuitarModule, добавляется автоматически при создании сущности
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
