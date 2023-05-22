import { User } from 'src/domain/entities/user.entity';
import { CreateUserDto } from 'src/interfaces/dtos/user/create-user.dto';
import { UpdateUserDto } from 'src/interfaces/dtos/user/update-user.dto';

export interface IUserUseCase {
  findAllUsers(): Promise<User[]>;
  registerUser(createUserDto: CreateUserDto): Promise<User>;
  editUser(updateUserDto: UpdateUserDto): Promise<User>;
  destoryUser(id: number): Promise<boolean>;
}
