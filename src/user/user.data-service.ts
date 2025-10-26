import { Injectable } from '@nestjs/common';

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

  async findUserById(id: number): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return await this.prisma.user.findUnique({
      where: { email },
    });
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
    return await this.prisma.user.update({
      where: { id },
      data: dto,
    });
  }

  async delete(id: number): Promise<User> {
    return await this.prisma.user.delete({
      where: { id },
    });
  }
}
