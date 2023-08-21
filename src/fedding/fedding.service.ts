import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateFeddingDto } from './dto/create-fedding.dto';
import { UpdateFeddingDto } from './dto/update-fedding.dto';
import { Model } from 'mongoose';
import { feddingDocument } from './schemas/fedding.schema';

@Injectable()
export class FeddingService {
  constructor(
    @InjectModel(Worker.name)
    private readonly feddingModule: Model<feddingDocument>,
  ) {}

  create(createFeddingDto: CreateFeddingDto) {
    return this.feddingModule.create(createFeddingDto);
  }

  findAll() {
    return this.feddingModule.find().exec();
  }

  findOne(id: number) {
    return this.feddingModule.findById({ id });
  }

  update(id: number, updateFeddingDto: UpdateFeddingDto) {
    return `This action updates a #${id} fedding`;
  }

  remove(id: number) {
    return `This action removes a #${id} fedding`;
  }
}
