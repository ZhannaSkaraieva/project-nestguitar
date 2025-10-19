import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto-user/CreateUserDto.dto';
import { UpdateUserDto } from './dto-user/UpdateUserDto.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAllUsers() {
    return await this.userService.findAllUsers();
  }

  @Get(':id')
  async findUserById(@Param('id') id: number) {
    return await this.userService.findUserById(id);
  }

  @Post()
  async create(@Body(ValidationPipe) dto: CreateUserDto) {
    return await this.userService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() dto: UpdateUserDto) {
    return await this.userService.update(id, dto);
  }

  @Delete(':id')
  async delete(@Param('id') id: number) {
    return await this.userService.delete(id);
  }
}

// {
//   "email": "user@example.com",
//   "password": "securePassword123",
//   "role": "USER",
//   "firstname": "John",
//   "secondname": "Doe"
// }
