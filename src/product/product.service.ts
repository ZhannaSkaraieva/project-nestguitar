import { Injectable } from '@nestjs/common';
import { UpdateProductDto } from './dto-product/UpdateProductDto.dto';
import { CreateProductDto } from './dto-product/CreateProductDto.dto';
import { ProductDataService } from './product.data-service';
import { Product } from '../../../nodu_modules/@prisma/generated';

@Injectable()
export class ProductService {
  constructor(private readonly productDataService: ProductDataService) {}
  // private Products = [
  //   {
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
  // ];

  async findAllProducts(): Promise<Product[]> {
    return await this.productDataService.findAllProducts();
  }

  async findById(id: number): Promise<Product | null> {
    return await this.productDataService.findById(id);
  }

  async create(dto: CreateProductDto): Promise<Product> {
    return this.productDataService.create(dto);
  }

  async update(id: number, dto: UpdateProductDto): Promise<Product> {
    await this.findById(id);
    return this.productDataService.update(id, dto);
  }

  async patch(id: number, dto: UpdateProductDto): Promise<Product> {
    await this.findById(id);
    return this.productDataService.patch(id, dto);
  }

  async delete(id: number): Promise<Product> {
    await this.findById(id); // если не найдена → сразу NotFoundException
    return this.productDataService.delete(id); // если найдена → удаляем
  }
}
