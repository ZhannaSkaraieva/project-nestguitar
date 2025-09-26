import { Injectable, NotFoundException } from '@nestjs/common';
import { UpdateProductDto } from './dto/UpdateProductDto.dto';
import { CreateProductDto } from './dto/CreateProductDto.dto';

@Injectable()
export class ProductService {
  private Products = [
    {
      id: 1,
      name: 'СURT Z30 Plus Acoustics',
      vendorCode: 'SO757575',
      reviews: '',
      rating: 0,
      article: 'SO754565',
      type: 'Электрогитара',
      properties: { strings: 7 } as Record<string, number>,
      description:
        'Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
      price: 12000,
      enabled: true,
      image: '/image/ElectroAcoustic.png',
    },
    {
      id: 2,
      name: 'СURT Z30 Plus',
      vendorCode: 'SO757575',
      reviews: '',
      rating: 0,
      article: 'SO754566',
      type: 'Электрогитара',
      properties: { strings: 6 } as Record<string, number>,
      description:
        'Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
      price: 9700,
      enabled: true,
      image: '/image/Electro.png',
    },
    {
      id: 3,
      name: 'Честер Bass',
      vendorCode: 'SO757575',
      reviews: '',
      rating: 0,
      article: 'SO754567',
      type: 'Акустическая',
      properties: { strings: 7 } as Record<string, number>,
      description:
        'Акустическая гитара с 7 струнами, Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
      price: 15000,
      enabled: true,
      image: '/image/ElectroBass.png',
    },
  ];

  findAll() {
    return this.Products;
  }

  findById(id: number) {
    const product = this.Products.find((product) => product.id === id);
    if (!product) {
      throw new NotFoundException('Product not found');
    }
    return product;
  }

  create(dto: CreateProductDto) {
    const newProduct = {
      id: this.Products.length + 1,
      name: dto.name,
      vendorCode: dto.vendorCode,
      reviews: dto.reviews || '',
      rating: dto.rating || 0,
      article: dto.article,
      type: dto.type,
      properties: dto.properties || {},
      description: dto.description || '',
      price: dto.price,
      enabled: true,
      image: dto.image || '', // якщо undefined -> пустий рядок (або шлях до placeholder)
    };
    this.Products.push(newProduct); // Додаємо нову гітару до масиву
    return this.Products; // Повертаємо оновлений масив гітар
  }

  update(id: string, dto: UpdateProductDto) {
    const product = this.findById(Number(id));

    product.name = dto.name;
    product.vendorCode = dto.vendorCode;
    product.reviews = dto.reviews || '';
    product.rating = dto.rating || 0;
    product.article = dto.article;
    product.type = dto.type;
    product.properties = dto.properties || {};
    product.description = dto.description || '';
    product.price = dto.price;
    product.enabled = dto.enabled;
    product.image = dto.image || '';

    return product;
  }

  patch(id: string, dto: Partial<UpdateProductDto>) {
    const product = this.findById(Number(id));

    product.name = dto.name ?? product.name;
    product.vendorCode = dto.vendorCode ?? product.vendorCode;
    product.reviews = dto.reviews ?? product.reviews;
    product.rating = dto.rating ?? product.rating;
    product.article = dto.article ?? product.article;
    product.type = dto.type ?? product.type;
    product.properties = dto.properties ?? product.properties;
    product.description = dto.description ?? product.description;
    product.price = dto.price ?? product.price;
    product.enabled = dto.enabled ?? product.enabled;
    product.image = dto.image ?? product.image;

    Object.assign(product, dto);

    return product;
  }

  delete(id: string) {
    this.findById(Number(id)); // если не найдена → сразу NotFoundException
    this.Products = this.Products.filter(
      (product) => product.id !== Number(id),
    );
    return this.Products;
  }
}
