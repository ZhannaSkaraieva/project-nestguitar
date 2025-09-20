import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { GuitarService } from './guitar.service';
import { CreateGuitarDto } from './dto/CreateGuitarDto.dto';
import { UpdateGuitarDto } from './dto/UpdateGuitarDtodto';

@Controller('guitar') // ( 'guitar' ) - це шлях до контролера (ендпоінт) // http://localhost:3000/guitar
export class GuitarController {
  constructor(private readonly guitarService: GuitarService) {}

  @Get('catalog') // http://localhost:3000/guitar/catalog
  findAll() {
    return this.guitarService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.guitarService.findById(Number(id));
  }

  @Post()
  create(@Body() dto: CreateGuitarDto) {
    return this.guitarService.create(dto);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() dto: UpdateGuitarDto) {
    return this.guitarService.update(id, dto);
  }

  @Patch(':id')
  patch(@Param('id') id: string, @Body() dto: Partial<UpdateGuitarDto>) {
    return this.guitarService.patch(id, dto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.guitarService.delete(id);
  }
}
