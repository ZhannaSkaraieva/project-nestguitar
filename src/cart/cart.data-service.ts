import { Injectable } from '@nestjs/common';
import type { Cart } from '../../node_modules/.prisma/client';
import { PrismaService } from './../prisma/prisma.service';

@Injectable()
export class CartDataService {
  constructor(private prisma: PrismaService) {}

  async getCartByUserId(userId: number): Promise<Cart | null> {
    return await this.prisma.cart.findUnique({
      where: { userId },
    });
  }
}
