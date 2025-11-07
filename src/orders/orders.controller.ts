import { Controller, Post, Body, Get, Patch, Param } from '@nestjs/common';
import { OrdersService } from './orders.service';

import { CreateOrderDto } from './dto/CreateOrderDto.dto';
import { Order } from '@prisma/client';
import { Public } from 'src/auth/public.decorator';
import { UpdateStatusDto } from './dto/UpdateStatusDto.dto';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @Public()
  @Post()
  async create(@Body() dto: CreateOrderDto): Promise<Order> {
    return await this.ordersService.create(dto);
  }

  @Get()
  async findAll() {
    return await this.ordersService.findAll();
  }

  @Patch(':id/status')
  async updateStatus(
    @Param('id') id: number,
    @Body() dto: UpdateStatusDto,
  ): Promise<Order> {
    return await this.ordersService.updateStatus(+id, dto.status, dto);
  }
}

// @Get()
// getOrders(@Req() req: Request) {
//   // Logic to retrieve all orders for the authenticated user
// }

// {
//   "userId": 1,
//   "orderItem": [
//     {
//       "productId": 2,
//       "quantity": 3
//     },
//     {
//       "productId": 5,
//       "quantity": 1
//     }
//   ]
// }
