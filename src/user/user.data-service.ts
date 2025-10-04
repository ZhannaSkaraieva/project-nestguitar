import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { User } from '../../../nodu_modules/@prisma/generated';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto-user/CreateUserDto.dto';
import { UpdateUserDto } from './dto-user/UpdateUserDto.dto';

@Injectable()
export class UserDataService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers(): Promise<User[]> {
    try {
      const users = await this.prisma.user.findMany();
      if (!users || users.length === 0) {
        throw new NotFoundException('NO_USERS_FOUND');
      }
      return users;
    } catch {
      throw new InternalServerErrorException('ERROR_RETRIEVING_USERS');
    }
  }

  async findUserById(id: number): Promise<User> {
    try {
      const user = await this.prisma.user.findUnique({ where: { id } });
      if (!user) {
        throw new NotFoundException('USER_NOT_FOUND');
      }
      return user;
    } catch {
      throw new InternalServerErrorException('ERROR_RETRIEVING_USER');
    }
  }

  async create(dto: CreateUserDto): Promise<User> {
    try {
      return await this.prisma.user.create({
        data: {
          email: dto.email,
          role: dto.role ?? 'USER',
          firstname: dto.firstname,
          secondname: dto.secondname,
          password: dto.password,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      });
    } catch {
      throw new InternalServerErrorException('ERROR_CREATING_USER');
    }
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    try {
      const updated = await this.prisma.user.update({
        where: { id },
        data: dto,
      });
      if (!updated) {
        throw new NotFoundException(`Product with id ${id} not found`);
      }
      return updated;
    } catch {
      throw new InternalServerErrorException('Error updating user');
    }
  }

  async delete(id: number): Promise<User> {
    try {
      const deletedUser = await this.prisma.user.delete({
        where: { id },
      });
      return deletedUser;
    } catch {
      throw new InternalServerErrorException('Error deleting product');
    }
  }
}
