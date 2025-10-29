import { Injectable } from '@nestjs/common';
import { OrdersDataService } from './orders.data-service';
import type { ICreateOrder } from './interfaces/order.interface';
import { Order } from '@prisma/client';
import type { IOrderItem } from './interfaces/order.interface';

@Injectable()
export class OrdersService {
  constructor(private readonly ordersDataService: OrdersDataService) {}

  async createOrder(dto: ICreateOrder): Promise<Order> {
    const { orderItem, userId } = dto;

    const user = await this.ordersDataService.findUserById(userId);
    if (!user) {
      throw new Error('User not found');
    }

    const arrayOrderItems: IOrderItem[] = [];
    let totalPrice = 0;
    const status = 'PENDING';

    for (const item of orderItem) {
      const product = await this.ordersDataService.findProductById(
        item.productId,
      );
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found`);
      }
      const totalPriceOfOrder = Number(product.price) * item.quantity;
      totalPrice += totalPriceOfOrder;

      arrayOrderItems.push({
        productId: product.id,
        quantity: item.quantity,
      });
    }

    const order = await this.ordersDataService.createOrder({
      userId,
      totalPrice,
      status,
      orderItem: arrayOrderItems,
    });

    return order;
  }
}
