import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { CartDataService } from './cart.data-service';

@Module({
  controllers: [CartController],
  providers: [CartService, CartDataService],
})
export class CartModule {}
