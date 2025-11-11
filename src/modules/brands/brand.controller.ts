import {Controller, Get, Post, Body, Param} from '@nestjs/common';
import { BrandService } from './brand.service';

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}
  @Post('create')
  create(@Body() body: {name:string, carIds?: number[]}) {
    return this.brandService.createBrand({
      name: body.name,
      carIds: body.carIds
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return id;
  }
}