import { PartialType } from '@nestjs/swagger';
import { CreateFeddingDto } from './create-fedding.dto';

export class UpdateFeddingDto extends PartialType(CreateFeddingDto) {}
