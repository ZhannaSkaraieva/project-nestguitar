import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateGuitarDto } from './dto/CreateGuitarDto.dto';
import { UpdateGuitarDto } from './dto/UpdateGuitarDtodto';

@Injectable()
export class GuitarService {
  private guitars = [
    {
      id: 1,
      title: 'СURT Z30 Plus Acoustics',
      vendorCode: 'SO757575',
      reviews: '',
      rating: 0,
      article: 'SO754565',
      type: 'Электрогитара',
      strings: 7,
      description:
        'Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
      price: 12000,
      stocked: true,
      image: '/image/ElectroAcoustic.png',
    },
    {
      id: 2,
      title: 'СURT Z30 Plus',
      vendorCode: 'SO757575',
      reviews: '',
      rating: 0,
      article: 'SO754566',
      type: 'Электрогитара',
      strings: 6,
      description:
        'Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
      price: 9700,
      stocked: true,
      image: '/image/Electro.png',
    },
    {
      id: 3,
      title: 'Честер Bass',
      vendorCode: 'SO757575',
      reviews: '',
      rating: 0,
      article: 'SO754567',
      type: 'Акустическая',
      strings: 7,
      description:
        'Акустическая гитара с 7 струнами, Гитара подходит как для старта обучения, так и для домашних занятий или использования в полевых условиях, например, в походах или для проведения уличных выступлений. Доступная стоимость, качество и надежная конструкция, а также приятный внешний вид, который сделает вас звездой вечеринки.',
      price: 15000,
      stocked: true,
      image: '/image/ElectroBass.png',
    },
  ];

  findAll() {
    return this.guitars;
  }

  findById(id: number) {
    const guitar = this.guitars.find((guitar) => guitar.id === id);
    if (!guitar) {
      throw new NotFoundException('Guitar not found');
    }
    return guitar;
  }

  create(dto: CreateGuitarDto) {
    const newGuitar = {
      id: this.guitars.length + 1,
      title: dto.title,
      vendorCode: dto.vendorCode,
      reviews: dto.reviews || '',
      rating: dto.rating || 0,
      article: dto.article,
      type: dto.type,
      strings: dto.strings,
      description: dto.description,
      price: dto.price,
      stocked: true,
      image: dto.image,
    };
    this.guitars.push(newGuitar); // Додаємо нову гітару до масиву
    return this.guitars; // Повертаємо оновлений масив гітар
  }

  update(id: string, dto: UpdateGuitarDto) {
    const guitar = this.findById(Number(id));

    guitar.title = dto.title;
    guitar.vendorCode = dto.vendorCode;
    guitar.reviews = dto.reviews || '';
    guitar.rating = dto.rating || 0;
    guitar.article = dto.article;
    guitar.type = dto.type;
    guitar.strings = dto.strings;
    guitar.description = dto.description;
    guitar.price = dto.price;
    guitar.image = dto.image;

    return guitar;
  }

  patch(id: string, dto: Partial<UpdateGuitarDto>) {
    const guitar = this.findById(Number(id));

    guitar.title = dto.title ?? guitar.title;
    guitar.vendorCode = dto.vendorCode ?? guitar.vendorCode;
    guitar.reviews = dto.reviews ?? guitar.reviews;
    guitar.rating = dto.rating ?? guitar.rating;
    guitar.article = dto.article ?? guitar.article;
    guitar.type = dto.type ?? guitar.type;
    guitar.strings = dto.strings ?? guitar.strings;
    guitar.description = dto.description ?? guitar.description;
    guitar.price = dto.price ?? guitar.price;
    guitar.image = dto.image ?? guitar.image;

    Object.assign(guitar, dto);

    return guitar;
  }

  delete(id: string) {
    const guitar = this.findById(Number(id));
    if (!guitar) {
      throw new NotFoundException('Guitar not found');
    } else {
      this.guitars = this.guitars.filter((guitar) => guitar.id !== Number(id));
    }

    return this.guitars;
  }
}
