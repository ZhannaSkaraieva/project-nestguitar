import { Module, ValidationPipe } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { APP_PIPE } from '@nestjs/core';
import { ProductDataService } from './product.data-service';

@Module({
  controllers: [ProductController],
  providers: [
    ProductService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
    ProductDataService,
  ],
})
export class ProductModule {}
