import { Block, BlockSchema } from './schemas/block.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BlocksService } from './blocks.service';
import { BlocksController } from './blocks.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Block.name, schema: BlockSchema },
      // { name: Speciality.name, schema: SpecialitySchem },
    ]),
  ],
  controllers: [BlocksController],
  providers: [BlocksService],
})
export class BlocksModule {}
