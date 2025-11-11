import {Module} from '@nestjs/common';
import {BrandService} from './brand.service';
import {BrandController} from './brand.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Brand} from './entities/brand.entity';
import {Car} from '../cars/entities/car.entity';
import {CarRepository} from '../cars/car.repository';
import {BrandRepository} from './brand.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Brand]), TypeOrmModule.forFeature([Car])],
  controllers: [BrandController],
  providers: [BrandService, BrandRepository, CarRepository],
  exports: [],
})

export class BrandModule {}