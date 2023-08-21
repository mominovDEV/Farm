import { Module } from '@nestjs/common';
import { RecordsOfFeddingService } from './records_of_fedding.service';
import { RecordsOfFeddingController } from './records_of_fedding.controller';

@Module({
  controllers: [RecordsOfFeddingController],
  providers: [RecordsOfFeddingService],
})
export class RecordsOfFeddingModule {}
