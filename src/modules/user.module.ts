import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserService } from 'src/application/services/user.service';
import { UserUseCase } from 'src/application/use_cases/user.use-case';
import { User } from '../domain/entities/user.entity';
import { UserRepository } from '../domain/repositories/user.repository';
import { UserController } from '../interfaces/controller/user.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [UserController],
  providers: [UserUseCase, UserService, UserRepository],
  exports: [UserUseCase, UserService],
})
export class UserModule {}
