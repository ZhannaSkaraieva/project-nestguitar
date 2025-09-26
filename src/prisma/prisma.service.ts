import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { withAccelerate } from '@prisma/extension-accelerate';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
  prisma = new PrismaClient().$extends(withAccelerate());
  async onModuleInit() {
    await this.$connect();
  }
}
