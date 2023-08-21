import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordsOfLinessService } from './records_of_liness.service';
import { CreateRecordsOfLinessDto } from './dto/create-records_of_liness.dto';
import { UpdateRecordsOfLinessDto } from './dto/update-records_of_liness.dto';

@Controller('records-of-liness')
export class RecordsOfLinessController {
  constructor(private readonly recordsOfLinessService: RecordsOfLinessService) {}

  @Post()
  create(@Body() createRecordsOfLinessDto: CreateRecordsOfLinessDto) {
    return this.recordsOfLinessService.create(createRecordsOfLinessDto);
  }

  @Get()
  findAll() {
    return this.recordsOfLinessService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsOfLinessService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecordsOfLinessDto: UpdateRecordsOfLinessDto) {
    return this.recordsOfLinessService.update(+id, updateRecordsOfLinessDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordsOfLinessService.remove(+id);
  }
}
