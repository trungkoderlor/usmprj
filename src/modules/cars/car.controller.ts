import {Controller, Get, Patch ,Post, Body, Param} from '@nestjs/common';
import { CarService } from './car.service';

@Controller('cars')
export class CarController {
  constructor(private readonly carService : CarService) {}
  @Get()
  findAll() {
    
    return this.carService.findAllCar();
  }
  @Post('create')
  create(@Body() body:{name: string,userId?:number, price?: number, brandIds?: number[]}) {
    return this.carService.createCar({
      name: body.name,
      userId: body?.userId,
      price: body?.price,
      brandIds: body?.brandIds
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }
  // @Patch(':id')
  // update(@Param('id') id: string, @Body() body: {name?: string, userId?:number, price?: number, brandIds?: number[]}) {
  //   return this.carService.updateCar(id, body);
  // }
}