import { Module } from '@nestjs/common';
import { MeatProductsService } from './meat_products.service';
import { MeatProductsController } from './meat_products.controller';

@Module({
  controllers: [MeatProductsController],
  providers: [MeatProductsService],
})
export class MeatProductsModule {}
