import { Controller, Post, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';

import { CreateOrderDto } from './dto/CreateOrderDto.dto';
import { Order } from '@prisma/client';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() dto: CreateOrderDto): Promise<Order> {
    return this.ordersService.createOrder(dto);
  }

  // @Get()
  // getOrders(@Req() req: Request) {
  //   // Logic to retrieve all orders for the authenticated user
  // }
}
