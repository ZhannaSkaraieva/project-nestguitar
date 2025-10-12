import { Injectable } from '@nestjs/common';
import { UserDataService } from './user.data-service';
import { User } from '../../node_modules/.prisma/client';
import { CreateUserDto } from './dto-user/CreateUserDto.dto';
import { UpdateUserDto } from './dto-user/UpdateUserDto.dto';
@Injectable()
export class UserService {
  constructor(private readonly userDataService: UserDataService) {}

  async findAllUsers(): Promise<User[]> {
    return await this.userDataService.findAllUsers();
  }

  async findUserById(id: number): Promise<User> {
    return await this.userDataService.findUserById(id);
  }

  async create(dto: CreateUserDto): Promise<User> {
    return await this.userDataService.create(dto);
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    return await this.userDataService.update(id, dto);
  }

  async delete(id: number): Promise<User> {
    return await this.userDataService.delete(id);
  }
}
