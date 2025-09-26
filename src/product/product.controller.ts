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
import { UpdateProductDto } from './dto/UpdateProductDto.dto';
import { CreateProductDto } from './dto/CreateProductDto.dto';

@Controller('product') // ( 'guitar' ) - це шлях до контролера (ендпоінт) // http://localhost:3000/product
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get() // http://localhost:3000/product/catalog декоратор
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.productService.findById(Number(id));
  }

  @Post()
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateProductDto) {
    return this.productService.update(id, dto);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() dto: Partial<UpdateProductDto>) {
    return this.productService.patch(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
