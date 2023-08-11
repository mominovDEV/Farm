import { Module } from '@nestjs/common';
import { FeddingService } from './fedding.service';
import { FeddingController } from './fedding.controller';

@Module({
  controllers: [FeddingController],
  providers: [FeddingService],
})
export class FeddingModule {}
