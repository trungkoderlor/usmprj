import {Injectable} from '@nestjs/common';
import {CarRepository} from './car.repository';
import {UserRepository} from '../users/user.repository';
import {BrandRepository} from '../brands/brand.repository';
@Injectable()
export class CarService {
  constructor(private readonly repo: CarRepository, private readonly userRepo :UserRepository , private readonly brandRepo: BrandRepository) {}
  async createCar(car: {name: string; userId?: number; price?: number; brandIds?: number[]}) {
    const {name, userId, price, brandIds} = car;
    if (userId) {
      const user = await this.userRepo.findById(userId);
      if (!user) {
        throw new Error('User not found');
      }
      else {
        if (brandIds) {
          const brands = await this.brandRepo.findByIds(brandIds);
          if (!brands) {
            throw new Error('Brands not found');
          }
          const newCar = await this.repo.create({name, price, user, brands});
          return newCar;
        }
        const newCar = await this.repo.create({name, price, user});
        return newCar;
      }
    }
    // if (brandId) {
    //   const brand = await this.repo.findById(brandId);
    //   if (!brand) {
    //     throw new Error('Brand not found');
    //   }
    // }
    return this.repo.create({name, price});  
  }
  async findAllCar() {
    return await this.repo.findAll();
  }
  updateCar() {
    return 'car updated';
  }
  deleteCar() {
    return 'car deleted';
  }
}
