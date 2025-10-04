import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '../../../nodu_modules/@prisma/generated';

import { withAccelerate } from '@prisma/extension-accelerate';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  private readonly prisma = new PrismaClient().$extends(withAccelerate());
  constructor() {
    super();
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }

  get client() {
    return this.prisma;
  }
}
