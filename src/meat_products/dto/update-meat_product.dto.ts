import { PartialType } from '@nestjs/swagger';
import { CreateMeatProductDto } from './create-meat_product.dto';

export class UpdateMeatProductDto extends PartialType(CreateMeatProductDto) {}
