import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {In, Repository} from 'typeorm';
import {Car} from '../cars/entities/car.entity';
import {Brand} from './entities/brand.entity';
import {User} from '../users/entities/user.entity';

@Injectable()
export class BrandRepository {
  constructor(
    @InjectRepository(Brand)
    private readonly BrandRepository: Repository<Brand>,
  ) {}

  async findAll(): Promise<Brand[] | null> {
    return this.BrandRepository.find({relations: ['cars']});
  }

  async findById(id: number): Promise<Brand | null> {
    return this.BrandRepository.findOne({where: {id}, relations: ['cars']});
  }
  async findByIds(ids: number[]): Promise<Brand[] | null> {
    return this.BrandRepository.find({where: {id: In(ids)}, relations: ['cars']});
  }
  async create(Brand: any): Promise<Brand | Brand[]> {
    const newBrand = this.BrandRepository.create(Brand);
    return this.BrandRepository.save(newBrand);
  }
}