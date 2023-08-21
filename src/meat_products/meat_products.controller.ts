import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MeatProductsService } from './meat_products.service';
import { CreateMeatProductDto } from './dto/create-meat_product.dto';
import { UpdateMeatProductDto } from './dto/update-meat_product.dto';

@Controller('meat-products')
export class MeatProductsController {
  constructor(private readonly meatProductsService: MeatProductsService) {}

  @Post()
  create(@Body() createMeatProductDto: CreateMeatProductDto) {
    return this.meatProductsService.create(createMeatProductDto);
  }

  @Get()
  findAll() {
    return this.meatProductsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.meatProductsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeatProductDto: UpdateMeatProductDto) {
    return this.meatProductsService.update(+id, updateMeatProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.meatProductsService.remove(+id);
  }
}
