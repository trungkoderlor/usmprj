import {Injectable} from '@nestjs/common';
import {BrandRepository} from './brand.repository';
import {CarRepository} from '../cars/car.repository';
@Injectable()
export class BrandService {
  constructor( private readonly repo: BrandRepository, private readonly carRepo: CarRepository) {}
  async createBrand( brand: {name:string, carIds?: number[]}) {
    const {name, carIds} = brand;
    if (carIds) {
      const cars = await this.carRepo.findByIds(carIds);
      if (!cars) {
        throw new Error('Cars not found');
      }
      else {
        const newBrand = await this.repo.create({name, cars});
        return newBrand;
      }
    }
    return this.repo.create({name});
  }
  findBrand() {
    return 'Brand found';
  }
  updateBrand() {
    return 'Brand updated';
  }
  deleteBrand() {
    return 'Brand deleted';
  }
}
