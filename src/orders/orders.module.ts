import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersController } from './orders.controller';
import { OrdersDataService } from './orders.data-service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService, OrdersDataService],
})
export class OrdersModule {}
