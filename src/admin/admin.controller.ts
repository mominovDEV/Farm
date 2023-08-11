import { CreateAdminDto } from './dto/create-admin.dto';
import { Body, Controller, Post } from '@nestjs/common';
import { AdminService } from './admin.service';
@Controller('admins')
export class AdminController {
  constructor(private readonly adminServie: AdminService) {}

  @Post()
  create(@Body() createAdminDto: CreateAdminDto) {
    return this.adminServie.create(createAdminDto);
  }
}
