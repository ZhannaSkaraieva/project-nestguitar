import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';

import { User, Role } from '../../node_modules/.prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUser } from './interfaces/user.interface';
import { UpdateUserDto } from './dto-user/UpdateUserDto.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserDataService {
  constructor(private prisma: PrismaService) {}

  async findAllUsers(): Promise<User[]> {
    return await this.prisma.user.findMany();
  }

  async findUserById(id: number): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id },
    });
    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }

  async findUserByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) {
      throw new NotFoundException(`User with id ${email} not found`);
    }
    return user;
  }

  async create(dto: CreateUser): Promise<User> {
    const hashedPassword = await bcrypt.hash(dto.password, 10); // хешируем пароль
    return await this.prisma.user.create({
      data: {
        email: dto.email,
        role: (dto.role as Role) ?? Role.USER,
        firstname: dto.firstname,
        secondname: dto.secondname,
        password: hashedPassword,
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
