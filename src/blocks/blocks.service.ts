import { InjectModel } from '@nestjs/mongoose';
// import { WorkerModule } from './../worker/worker.module';
import { Injectable } from '@nestjs/common';
import { CreateBlockDto } from './dto/create-block.dto';
import { UpdateBlockDto } from './dto/update-block.dto';
import { Block, BlockDocument } from './schemas/block.schema';
import { Model } from 'mongoose';

@Injectable()
export class BlocksService {
  constructor(
    @InjectModel(Block.name)
    private readonly blockModule: Model<BlockDocument>,
  ) {}
  create(createBlockDto: CreateBlockDto) {
    return this.blockModule.create(createBlockDto);
  }

  findAll() {
    return this.blockModule.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} block`;
  }

  update(id: number, updateBlockDto: UpdateBlockDto) {
    return `This action updates a #${id} block`;
  }

  remove(id: number) {
    return `This action removes a #${id} block`;
  }
}
