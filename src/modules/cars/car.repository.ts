import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {In, Repository} from 'typeorm';
import {Car} from './entities/car.entity';
import {Brand} from '../brands/entities/brand.entity';
import {User} from '../users/entities/user.entity';

@Injectable()
export class CarRepository {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}

  async findAll(): Promise<Car[] | null> {
    return this.carRepository.find({relations: ['brands', 'user']});
  }

  async findById(id: number): Promise<Car | null> {
    return this.carRepository.findOne({where: {id}, relations: ['brands', 'user']});
  }
  async findByIds(ids: number[]): Promise<Car[] | null> {
    return this.carRepository.find({where: {id: In(ids)}, relations: ['brands', 'user']});
  }
  async create(car: any): Promise<Car | Car[]> {
    if (Array.isArray(car)) {
      const newCars = this.carRepository.create(car);
      return this.carRepository.save(newCars);
    }
    const newCar = this.carRepository.create(car);
    return this.carRepository.save(newCar);
  }
}