import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Order } from '@prisma/client';
import { Product } from '@prisma/client';
import type { ICreateOrder } from './interfaces/order.interface';

@Injectable()
export class OrdersDataService {
  constructor(private readonly prisma: PrismaService) {}

  async findUserById(userId: number): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id: userId },
    });
  }

  async findProductById(productId: number): Promise<Product | null> {
    return await this.prisma.product.findUnique({
      where: { id: productId },
    });
  }

  async createOrder(dto: ICreateOrder): Promise<Order> {
    return this.prisma.order.create({
      data: {
        userId: dto.userId,
        totalPrice: dto.totalPrice,
        status: 'PENDING',
        orderItem: {
          create: dto.orderItem,
        },
      },
      include: {
        orderItem: true,
      },
    });
  }

  //   async createOrder(userId: number, orderItems: any[]): Promise<any> {
  //     // Logic to create an order from the user's cart and process payment
  //   }
}
