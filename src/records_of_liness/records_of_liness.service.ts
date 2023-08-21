import { Injectable } from '@nestjs/common';
import { CreateRecordsOfLinessDto } from './dto/create-records_of_liness.dto';
import { UpdateRecordsOfLinessDto } from './dto/update-records_of_liness.dto';

@Injectable()
export class RecordsOfLinessService {
  create(createRecordsOfLinessDto: CreateRecordsOfLinessDto) {
    return 'This action adds a new recordsOfLiness';
  }

  findAll() {
    return `This action returns all recordsOfLiness`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recordsOfLiness`;
  }

  update(id: number, updateRecordsOfLinessDto: UpdateRecordsOfLinessDto) {
    return `This action updates a #${id} recordsOfLiness`;
  }

  remove(id: number) {
    return `This action removes a #${id} recordsOfLiness`;
  }
}
