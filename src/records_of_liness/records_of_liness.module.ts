import { Module } from '@nestjs/common';
import { RecordsOfLinessService } from './records_of_liness.service';
import { RecordsOfLinessController } from './records_of_liness.controller';

@Module({
  controllers: [RecordsOfLinessController],
  providers: [RecordsOfLinessService],
})
export class RecordsOfLinessModule {}
