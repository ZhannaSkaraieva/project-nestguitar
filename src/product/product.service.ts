import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import type { IUpdateProduct } from './interfaces/product.updateinterface';
import type { ICreateProduct } from './interfaces/product.interface';
import { ProductDataService } from './product.data-service';
import type { Product } from './generated/prisma/client';


@Injectable()
export class ProductService {
  constructor(private readonly productDataService: ProductDataService) {}

  async findAllProducts(): Promise<Product[]> {
    try {
      const products = await this.productDataService.findAllProducts();
      if (!products || products.length === 0) {
        throw new NotFoundException('PRODUCTS_NOT_FOUND');
      }
      return products;
    } catch {
      throw new InternalServerErrorException('ERROR_RETRIEVING_PRODUCTS');
    }
  }

  async findById(id: number): Promise<Product | null> {
    try {
      const product = await this.productDataService.findById(id);
      if (!product) {
        throw new NotFoundException('PRODUCT_NOT_FOUND');
      }
      return product;
    } catch {
      throw new InternalServerErrorException('ERROR_RETRIEVING_PRODUCT');
    }
  }

  async create(payload: ICreateProduct): Promise<Product> {
    try {
      return this.productDataService.create(payload);
    } catch {
      throw new InternalServerErrorException('Error creating product');
    }
  }

  async update(id: number, payload: IUpdateProduct): Promise<Product> {
    try {
      await this.findById(id);
      return await this.productDataService.update(id, payload);
    } catch {
      throw new InternalServerErrorException('Error updating product');
    }
  }

  async patch(id: number, payload: IUpdateProduct): Promise<Product> {
    try {
      await this.findById(id);
      return await this.productDataService.patch(id, payload);
    } catch {
      throw new InternalServerErrorException('Error updating product');
    }
  }

  async delete(id: number): Promise<Product> {
    try {
      await this.findById(id); // если не найдена → сразу NotFoundException
      return await this.productDataService.delete(id); // если найдена → удаляем
    } catch {
      throw new InternalServerErrorException('Error deleting product');
    }
  }
}
