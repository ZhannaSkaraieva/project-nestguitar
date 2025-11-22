import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '.prisma/client';

import { withAccelerate } from '@prisma/extension-accelerate';

@Injectable()
// export class PrismaService extends PrismaClient implements OnModuleInit {
//   private readonly prisma = new PrismaClient().$extends(withAccelerate());
//   constructor() {
//     super();
//   }
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super({
      // Prisma Accelerate URL берём из env
      accelerateUrl: process.env.DATABASE_URL,
    });
    // Подключаем расширение Accelerate
    this.$extends(withAccelerate());
  }
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // get client() {
  //   return this.prisma;
  // }
}
