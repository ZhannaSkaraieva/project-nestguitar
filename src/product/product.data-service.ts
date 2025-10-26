import { PrismaService } from './../prisma/prisma.service';
import { Injectable } from '@nestjs/common';
import { Product } from '../../node_modules/.prisma/client';
import type { ICreateProduct } from './interfaces/product.interface';
import type { IUpdateProduct } from './interfaces/product.updateinterface';

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
    return await this.prisma.product.findMany();
  }

  async findById(id: number): Promise<Product | null> {
    return await this.prisma.product.findUnique({
      where: { id },
    });
  }

  async create(dto: ICreateProduct): Promise<Product> {
    const {
      name,
      vendorCode,
      article,
      type,
      properties,
      description,
      price,
      enabled,
      image,
      quantity,
    } = dto;
    return await this.prisma.product.create({
      data: {
        name,
        vendorCode,
        article,
        type,
        properties,
        description: description ?? null,
        price,
        enabled: enabled ?? false,
        image: image ?? null,
        quantity: quantity ?? 0,
      },
    });
  }

  async update(id: number, dto: IUpdateProduct): Promise<Product> {
    return await this.prisma.product.update({
      where: { id },
      data: dto,
    });
  }

  async patch(id: number, dto: IUpdateProduct): Promise<Product> {
    return await this.prisma.product.update({
      where: { id },
      data: dto,
    });
  }

  async delete(id: number) {
    return await this.prisma.product.delete({
      where: { id },
    });
  }
}
