import { PartialType } from '@nestjs/swagger';
import { CreateRecordsOfLinessDto } from './create-records_of_liness.dto';

export class UpdateRecordsOfLinessDto extends PartialType(CreateRecordsOfLinessDto) {}
