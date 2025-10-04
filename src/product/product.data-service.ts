import { PrismaService } from './../prisma/prisma.service';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { Product } from '../../../nodu_modules/@prisma/generated';
import { CreateProductDto } from './dto-product/CreateProductDto.dto';
//import { PrismaService } from 'src/prisma/prisma.service'
import { UpdateProductDto } from './dto-product/UpdateProductDto.dto';

@Injectable()
export class ProductDataService {
  constructor(private prisma: PrismaService) {}
  //     id: 1,
  //     name: 'СURT Z30 Plus Acoustics',
  //     vendorCode: 'SO757575',
  //     reviews: '',
  //     rating: 0,
  //     article: 'SO754565',
  //     type: 'Электрогитара',
  //     properties: { strings: 7 } as Record<string, number>,
  //     description:
  //       'Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
  //     price: 12000,
  //     enabled: true,
  //     image: '/image/ElectroAcoustic.png',
  //   },
  //   {
  //     id: 2,
  //     name: 'СURT Z30 Plus',
  //     vendorCode: 'SO757575',
  //     reviews: '',
  //     rating: 0,
  //     article: 'SO754566',
  //     type: 'Электрогитара',
  //     properties: { strings: 6 } as Record<string, number>,
  //     description:
  //       'Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
  //     price: 9700,
  //     enabled: true,
  //     image: '/image/Electro.png',
  //   },
  //   {
  //     id: 3,
  //     name: 'Честер Bass',
  //     vendorCode: 'SO757575',
  //     reviews: '',
  //     rating: 0,
  //     article: 'SO754567',
  //     type: 'Акустическая',
  //     properties: { strings: 7 } as Record<string, number>,
  //     description:
  //       'Акустическая гитара с 7 струнами, Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
  //     price: 15000,
  //     enabled: true,
  //     image: '/image/ElectroBass.png',
  //   },

  async findAllProducts(): Promise<Product[]> {
    try {
      const products = await this.prisma.product.findMany();
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
      const product = await this.prisma.product.findUnique({ where: { id } });
      if (!product) {
        throw new NotFoundException('PRODUCT_NOT_FOUND');
      }
      return product;
    } catch {
      throw new InternalServerErrorException('ERROR_RETRIEVING_PRODUCT');
    }
  }

  async create(dto: CreateProductDto): Promise<Product> {
    try {
      return this.prisma.product.create({
        data: { ...dto },
      });
    } catch {
      throw new InternalServerErrorException('Error creating product');
    }
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product> {
    try {
      return await this.prisma.product.update({
        where: { id },
        data: dto,
      });
    } catch {
      throw new InternalServerErrorException('Error updating product');
    }
  }

  async patch(id: number, dto: UpdateProductDto): Promise<Product> {
    try {
      return await this.prisma.product.update({
        where: { id },
        data: dto,
      });
    } catch {
      throw new InternalServerErrorException('Error updating product');
    }
  }

  async delete(id: number) {
    try {
      return await this.prisma.product.delete({
        where: { id },
      });
    } catch {
      throw new InternalServerErrorException('Error deleting product');
    }
  }
}
