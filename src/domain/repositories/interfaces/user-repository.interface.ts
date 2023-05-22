import { User } from 'src/domain/entities/user.entity';
import { CreateUserDto } from 'src/interfaces/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/interfaces/dtos/user/update-user.dto';

export interface IUserRepository {
  selectAllUsers(): Promise<User[]>;
  selectUsersByAge(age: number): Promise<User[]>;
  selectUserById(id: number): Promise<User>;
  insertUser(createdUserDto: CreateUserDto): Promise<User>;
  updateUser(updateUserDto: UpdateUserDto): Promise<User>;
  deleteUser(id: number): Promise<boolean>;
}
