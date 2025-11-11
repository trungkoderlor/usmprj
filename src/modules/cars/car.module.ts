import {Module} from '@nestjs/common';
import {CarService} from './car.service';
import {CarController} from './car.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Car} from './entities/car.entity';
import {Brand} from '../brands/entities/brand.entity';
import {User} from '../users/entities/user.entity';
import {CarRepository} from './car.repository';
import {UserRepository} from '../users/user.repository';
import {BrandRepository} from '../brands/brand.repository';
@Module({
  imports: [TypeOrmModule.forFeature([Car]), TypeOrmModule.forFeature([Brand]), TypeOrmModule.forFeature([User])],
  controllers: [CarController],
  providers: [CarService,CarRepository,UserRepository,BrandRepository],
  exports: [],
})

export class CarModule {}