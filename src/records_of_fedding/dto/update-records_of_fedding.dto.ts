import { PartialType } from '@nestjs/swagger';
import { CreateRecordsOfFeddingDto } from './create-records_of_fedding.dto';

export class UpdateRecordsOfFeddingDto extends PartialType(CreateRecordsOfFeddingDto) {}
