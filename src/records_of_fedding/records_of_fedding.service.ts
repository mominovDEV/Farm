import { Injectable } from '@nestjs/common';
import { CreateRecordsOfFeddingDto } from './dto/create-records_of_fedding.dto';
import { UpdateRecordsOfFeddingDto } from './dto/update-records_of_fedding.dto';

@Injectable()
export class RecordsOfFeddingService {
  create(createRecordsOfFeddingDto: CreateRecordsOfFeddingDto) {
    return 'This action adds a new recordsOfFedding';
  }

  findAll() {
    return `This action returns all recordsOfFedding`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recordsOfFedding`;
  }

  update(id: number, updateRecordsOfFeddingDto: UpdateRecordsOfFeddingDto) {
    return `This action updates a #${id} recordsOfFedding`;
  }

  remove(id: number) {
    return `This action removes a #${id} recordsOfFedding`;
  }
}
