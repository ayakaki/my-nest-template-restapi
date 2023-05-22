import { Injectable } from '@nestjs/common';
import { CreateUserDto } from 'src/interfaces/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/interfaces/dtos/user/update-user.dto';
import { User } from '../../domain/entities/user.entity';
import { UserRepository } from '../../domain/repositories/user.repository';
import { IUserUseCase } from './interfaces/user-use-case.interface';

@Injectable()
export class UserUseCase implements IUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async findAllUsers(): Promise<User[]> {
    return await this.userRepository.selectAllUsers();
  }

  async findUsersByAge(age: number): Promise<User[]> {
    return await this.userRepository.selectUsersByAge(age);
  }

  async findUserById(id: number): Promise<User> {
    return await this.userRepository.selectUserById(id);
  }

  async registerUser(createUserDto: CreateUserDto): Promise<User> {
    return await this.userRepository.insertUser(createUserDto);
  }

  async editUser(updateUserDto: UpdateUserDto): Promise<User> {
    return await this.userRepository.updateUser(updateUserDto);
  }

  async destoryUser(id: number): Promise<boolean> {
    return await this.userRepository.deleteUser(id);
  }
}
