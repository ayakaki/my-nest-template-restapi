import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/orm/typeorm.config';
import { UserModule } from './modules/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`src/config/envs/.env.${process.env.NODE_ENV}`],
      load: [],
    }),
    UserModule,
    TypeOrmModule.forRootAsync(TypeOrmConfigService),
  ],
})
export class AppModule {}
