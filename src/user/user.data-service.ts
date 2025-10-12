import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { User } from '../../node_modules/.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './interfaces/user.interface';
import { UpdateUserDto } from './dto-user/UpdateUserDto.dto';

@Injectable()
export class UserDataService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findUserById(id: number): Promise<User> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async create(dto: User): Promise<User> {
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
