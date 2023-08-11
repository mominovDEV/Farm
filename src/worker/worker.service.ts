import { WorkerModule } from './worker.module';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';
import { CreateWorkerDto } from './dto/create-worker.dto';
import { UpdateWorkerDto } from './dto/update-worker.dto';
import { Worker, WorkerDocument } from './schemas/worker.schema';
import { Model } from 'mongoose';

@Injectable()
export class WorkerService {
  constructor(
    @InjectModel(Worker.name)
    private readonly workerModule: Model<WorkerDocument>,
  ) {}
  create(createWorkerDto: CreateWorkerDto) {
    return this.workerModule.create(createWorkerDto);
  }

  findAll() {
    return this.workerModule.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} worker`;
  }

  update(id: number, updateWorkerDto: UpdateWorkerDto) {
    return `This action updates a #${id} worker`;
  }

  remove(id: number) {
    return `This action removes a #${id} worker`;
  }
}
