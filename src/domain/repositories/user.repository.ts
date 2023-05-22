import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/interfaces/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/interfaces/dtos/user/update-user.dto';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { IUserRepository } from './interfaces/user-repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>,
  ) {}

  // Userテーブルのレコードを全件取得する
  async selectAllUsers(): Promise<User[]> {
    return await this.repository.find();
  }

  // Userテーブルのレコードをageで検索する
  async selectUsersByAge(age: number): Promise<User[]> {
    return await this.repository.find({ where: { age: age } });
  }

  // Userテーブルのレコードをageで検索する
  async selectUserById(id: number): Promise<User> {
    return await this.repository.findOne({ where: { id: id } });
  }

  // Userテーブルにレコードを追加する
  async insertUser(createUser: CreateUserDto): Promise<User> {
    const user = new User();

    Object.assign(user, createUser);

    // 対象のユーザを格納
    user.createdBy = createUser.lastName + createUser.firstName;
    user.updatedBy = createUser.lastName + createUser.firstName;

    return await this.repository.save(user);
  }

  // Userテーブルのレコードを更新する
  async updateUser(updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.repository.findOne({
      where: { id: updateUserDto.id },
    });

    if (!user) {
      throw new Error(`User with ID ${updateUserDto.id} not found`);
    }
    Object.assign(user, updateUserDto);

    return await this.repository.save(user);
  }

  // Userテーブルのレコードを削除する
  async deleteUser(id: number): Promise<boolean> {
    const user = await this.repository.findOne({ where: { id: id } });

    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }

    await this.repository.delete(id);

    return true;
  }
}
