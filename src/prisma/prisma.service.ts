import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { withAccelerate } from '@prisma/extension-accelerate';
import { PrismaClient } from './generated/prisma/client';

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
    super();
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
