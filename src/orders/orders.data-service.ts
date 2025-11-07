import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Order } from '@prisma/client';
import { Product } from '@prisma/client';
//import type { ICreateOrder } from './interfaces/createOrder.interface';
import { IUpdateStatus } from './interfaces/updateStatus.interface';
import { ICreateOrderInternal } from './interfaces/createOrderInternal.interface';

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

  async create(data: ICreateOrderInternal): Promise<Order> {
    return this.prisma.order.create({
      data: {
        userId: data.userId,
        totalPrice: data.totalPrice,
        orderItem: {
          create: data.orderItem,
        },
      },
      include: {
        orderItem: true,
      },
    });
  }

  async findAll(): Promise<Order[]> {
    return this.prisma.order.findMany({
      include: {
        orderItem: true,
      },
    });
  }

  async updateStatus(
    id: number,
    //status: string,
    data: IUpdateStatus,
  ): Promise<Order | null> {
    return this.prisma.order.update({
      where: { id },
      data: { status: data.status },
      include: {
        orderItem: true,
      },
    });
  }
  //   async createOrder(userId: number, orderItems: any[]): Promise<any> {
  //     // Logic to create an order from the user's cart and process payment
  //   }
}
