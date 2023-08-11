import { Injectable } from '@nestjs/common';
import { CreateFeddingDto } from './dto/create-fedding.dto';
import { UpdateFeddingDto } from './dto/update-fedding.dto';

@Injectable()
export class FeddingService {
  create(createFeddingDto: CreateFeddingDto) {
    return 'This action adds a new fedding';
  }

  findAll() {
    return `This action returns all fedding`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fedding`;
  }

  update(id: number, updateFeddingDto: UpdateFeddingDto) {
    return `This action updates a #${id} fedding`;
  }

  remove(id: number) {
    return `This action removes a #${id} fedding`;
  }
}
