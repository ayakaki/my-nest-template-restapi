import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { UserUseCase } from 'src/application/use_cases/user.use-case';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDto } from '../dtos/user/create-user.dto';
import { UpdateUserDto } from '../dtos/user/update-user.dto';

@Controller()
export class UserController {
  constructor(private userUseCase: UserUseCase) {}

  // 複数件取得
  @Get('users')
  async allUsers(): Promise<User[]> {
    return this.userUseCase.findAllUsers();
  }

  // 一件取得
  @Get('users/:id')
  async userById(@Param('id') id: number): Promise<User> {
    return this.userUseCase.findUserById(id);
  }

  // 一件登録
  @Post('users')
  @HttpCode(201)
  async registerUser(@Body() createUserDto: CreateUserDto): Promise<User> {
    return await this.userUseCase.registerUser(createUserDto);
  }

  // 一件更新
  @Put('users/:id')
  @HttpCode(200)
  async editUser(@Param('id') id: number, @Body() createUserDto: CreateUserDto): Promise<User> {

    const updateUserDto: UpdateUserDto = {
      id: Number(id),
      ...createUserDto,
    };

    return await this.userUseCase.editUser(updateUserDto);
  }

  // 一件削除
  @Delete('users/:id')
  async destoryUser(@Param('id') id: number): Promise<boolean> {
    return await this.userUseCase.destoryUser(id);
  }

}

