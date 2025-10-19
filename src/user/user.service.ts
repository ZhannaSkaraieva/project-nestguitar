import {
  Injectable,
  NotFoundException,
  InternalServerErrorException,
  ConflictException,
} from '@nestjs/common';
import { UserDataService } from './user.data-service';
import { User } from '../../node_modules/.prisma/client';
import type { CreateUser } from './interfaces/user.interface';
import { UpdateUserDto } from './dto-user/UpdateUserDto.dto';
@Injectable()
export class UserService {
  constructor(private readonly userDataService: UserDataService) {}

  async findAllUsers(): Promise<User[]> {
    try {
      const users = await this.userDataService.findAllUsers();
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
      const user = await this.userDataService.findUserById(id);
      if (!user) {
        throw new NotFoundException('USER_NOT_FOUND');
      }
      return user;
    } catch {
      throw new InternalServerErrorException('ERROR_RETRIEVING_USER');
    }
  }

  async create(dto: CreateUser): Promise<User> {
    const existUse = await this.userDataService.findUserByEmail(dto.email);
    if (existUse) {
      throw new ConflictException('USER_ALREADY_EXISTS');
    }
    try {
      return await this.userDataService.create(dto);
    } catch {
      throw new InternalServerErrorException('ERROR_CREATING_USER');
    }
  }

  async update(id: number, dto: UpdateUserDto): Promise<User> {
    return await this.userDataService.update(id, dto);
  }

  async delete(id: number): Promise<User> {
    return await this.userDataService.delete(id);
  }
}
