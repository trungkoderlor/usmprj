import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserRepository } from './user.repository';
import { User } from './entities/user.entity';
import { Car } from '../cars/entities/car.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forFeature([Car]),
  ],
  controllers: [UsersController],
  providers: [
    UsersService,
    UserRepository,
  ],
  exports: [UsersService, UserRepository],
})
export class UsersModule { }
