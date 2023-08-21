import { Injectable } from '@nestjs/common';
import { CreateMeatProductDto } from './dto/create-meat_product.dto';
import { UpdateMeatProductDto } from './dto/update-meat_product.dto';

@Injectable()
export class MeatProductsService {
  create(createMeatProductDto: CreateMeatProductDto) {
    return 'This action adds a new meatProduct';
  }

  findAll() {
    return `This action returns all meatProducts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} meatProduct`;
  }

  update(id: number, updateMeatProductDto: UpdateMeatProductDto) {
    return `This action updates a #${id} meatProduct`;
  }

  remove(id: number) {
    return `This action removes a #${id} meatProduct`;
  }
}
