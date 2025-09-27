import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { UpdateProductDto } from './dto-product/UpdateProductDto.dto';
import { CreateProductDto } from './dto-product/CreateProductDto.dto';

//DTO - Data Transfer Object - обєкт для передачі даних
//ИСПОЛЬЗУЮ ТОЛЬКО В КОНТРОЛЛЕРЕ

//Чтобы обозначить класс как контроллер, мы используем  декоратор @Controller ( )
@Controller('products') // ( 'products' ) - це шлях до контролера (ендпоінт) // http://localhost:3000/products
//передаём ему необязательный аргумент. Он служит префиксом пути ко всем маршрутам внутри контроллера.
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  //контроллеры  @ Get ( ) ,  @ Post ( ) ,  Delete ( ) и  @ Put ( )
  //сообщают Nest о необходимости создания обработчика для конкретной конечной точки HTTP-запросов.
  //GET/products
  @Get() // http://localhost:3000/product/catalog декоратор
  findAll() {
    return this.productService.findAll();
  }

  //GET /produccts/{id}
  @Get(':id') //динамический роутинг http://localhost:3000/product/1 ( :id - динамический параметр)
  findById(@Param('id') id: string) {
    return this.productService.findById(Number(id));
  }

  //POST /products
  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }
  //По умолчанию NestJS отвечает кодом статуса 200 OK,
  // за исключением кода 201 Created для POST.
  // Если вы хотите изменить код статуса, вы можете использовать декоратор @HttpCode().

  //PUT /products/{id}
  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }
  //Для извлечения значения параметра маршрута используется  декоратор @Param ( )
  //получаем к нему доступ в аргументах обработчика маршрута.
  //декоратор @ Body ( )обеспечивает простой доступ к телу запроса

  //PATCH /products/{id}
  @Patch(':id')
  patch(@Param('id') id: string, @Body() dto: Partial<UpdateProductDto>) {
    return this.productService.patch(id, dto);
  }

  //DELETE /products/{id}
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
