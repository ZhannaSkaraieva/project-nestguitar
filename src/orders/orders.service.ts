import { Injectable, NotFoundException } from '@nestjs/common';
import { OrdersDataService } from './orders.data-service';
import type {
  ICreateOrder,
  IOrderItem,
} from './interfaces/createOrder.interface';
import { IUpdateStatus } from './interfaces/updateStatus.interface';
import { Order } from 'src/generated/prisma/client';
//import Stripe from 'stripe';

@Injectable()
export class OrdersService {
  //private stripe: Stripe;
  constructor(private readonly ordersDataService: OrdersDataService) {
    // const stripeKey = process.env.STRIPE_SECRET_KEY;
    // if (!stripeKey) {
    //   throw new Error('STRIPE_SECRET_KEY is not defined in .env');
    // }
    // this.stripe = new Stripe(stripeKey);
  }

  async create(data: ICreateOrder): Promise<Order> {
    const { orderItem, userId } = data;

    const user = await this.ordersDataService.findUserById(userId);
    if (!user) {
      new NotFoundException('User not found'); //check doc about NotFoundException
    }

    const arrayOrderItems: IOrderItem[] = [];
    let totalPrice = 0;

    for (const item of orderItem) {
      const product = await this.ordersDataService.findProductById(
        item.productId,
      );
      if (!product) {
        throw new Error(`Product with ID ${item.productId} not found`); //not foundExeption
      }
      const totalPriceOfProduct = Number(product.price) * item.quantity;
      totalPrice += totalPriceOfProduct;

      arrayOrderItems.push({
        productId: product.id,
        quantity: item.quantity,
      });
    }

    const order = await this.ordersDataService.create({
      userId,
      // status,
      totalPrice,
      orderItem: arrayOrderItems,
    });

    return order;
  }

  async findAll(): Promise<Order[]> {
    return this.ordersDataService.findAll();
  }

  async updateStatus(
    id: number,
    status: string,
    payload: IUpdateStatus,
  ): Promise<Order> {
    const order = await this.ordersDataService.updateStatus(
      id,
      //status,
      payload,
    );
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }
}
