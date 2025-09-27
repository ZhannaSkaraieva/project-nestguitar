import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { newProduct, Product } from './interfaces/product.interface';

@Injectable()
export class ProductDataService {
  constructor(private prisma: PrismaService) {}
  private Products: Product[] = []; // массив продуктов;
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

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }

  findById(id: number): Promise<Product | null> {
    const product = this.prisma.product.findUnique(
      (product: { id: number }) => product.id === id,
    );
    return product;
  }
  create(product: Omit<Product, 'id'>): Promise<Product> {
    return this.prisma.product.create({
      data: {
        id: this.Products.length + 1,
        name: product.name,
        vendorCode: product.vendorCode,
        reviews: product.reviews || '',
        rating: product.rating || 0,
        article: product.article,
        type: product.type,
        properties: product.properties || {},
        description: product.description || '',
        price: product.price,
        enabled: true,
        image: product.image || '',
        quantity: 0,
      },
    });
  }
  update(id: number, product: Partial<Product>): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data: product,
    });
  }
  patch(id: number, product: Partial<Product>): Promise<Product> {
    return this.prisma.product.update({
      where: { id },
      data: {
        ...(product.name !== undefined && { name: product.name }),
        ...(product.vendorCode !== undefined && {
          vendorCode: product.vendorCode,
        }),
        ...(product.reviews !== undefined && { reviews: product.reviews }),
        ...(product.rating !== undefined && { rating: product.rating }),
        ...(product.article !== undefined && { article: product.article }),
        ...(product.type !== undefined && { type: product.type }),
        ...(product.properties !== undefined && {
          properties: product.properties,
        }),
        ...(product.description !== undefined && {
          description: product.description,
        }),
        ...(product.price !== undefined && { price: product.price }),
        ...(product.enabled !== undefined && { enabled: product.enabled }),
        ...(product.image !== undefined && { image: product.image }),
        ...(product.quantity !== undefined && { quantity: product.quantity }),
      },
    });
  }
  delete(id: number) {
    const product = this.prisma.product.delete(
      (product: { id: number }) => product.id !== Number(id),
    );
  }
}
