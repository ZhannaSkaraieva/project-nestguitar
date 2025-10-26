import { Controller, Post, Get, Body, Req } from '@nestjs/common';
import { OrdersService } from './orders.service';
import type { Request } from 'express';
import { CheckoutDto } from './dto/CheckoutDto.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Post()
  createOrder(@Body() checkoutDto: CheckoutDto, @Req() req: Request) {
    // Logic to create an order from the user's cart and process payment
  }

  @Get()
  getOrders(@Req() req: Request) {
    // Logic to retrieve all orders for the authenticated user
  }
}
