import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordsOfFeddingService } from './records_of_fedding.service';
import { CreateRecordsOfFeddingDto } from './dto/create-records_of_fedding.dto';
import { UpdateRecordsOfFeddingDto } from './dto/update-records_of_fedding.dto';

@Controller('records-of-fedding')
export class RecordsOfFeddingController {
  constructor(private readonly recordsOfFeddingService: RecordsOfFeddingService) {}

  @Post()
  create(@Body() createRecordsOfFeddingDto: CreateRecordsOfFeddingDto) {
    return this.recordsOfFeddingService.create(createRecordsOfFeddingDto);
  }

  @Get()
  findAll() {
    return this.recordsOfFeddingService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsOfFeddingService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordsOfFeddingDto: UpdateRecordsOfFeddingDto) {
    return this.recordsOfFeddingService.update(+id, updateRecordsOfFeddingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordsOfFeddingService.remove(+id);
  }
}
