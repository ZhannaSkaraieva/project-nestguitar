import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import type { UpdateProduct } from './interfaces/product.updateinterface';
import type { CreateProduct } from './interfaces/product.interface';
import { ProductDataService } from './product.data-service';
import { Product } from '../../node_modules/.prisma/client';

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

  async create(dto: CreateProduct): Promise<Product> {
    try {
      return this.productDataService.create(dto);
    } catch {
      throw new InternalServerErrorException('Error creating product');
    }
  }

  async update(id: number, dto: UpdateProduct): Promise<Product> {
    try {
      await this.findById(id);
      return await this.productDataService.update(id, dto);
    } catch {
      throw new InternalServerErrorException('Error updating product');
    }
  }

  async patch(id: number, dto: UpdateProduct): Promise<Product> {
    try {
      await this.findById(id);
      return await this.productDataService.patch(id, dto);
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
