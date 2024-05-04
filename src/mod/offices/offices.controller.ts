import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OfficesService } from './offices.service';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';

@Controller('offices')
export class OfficesController {
  constructor(private readonly officesService: OfficesService) { }

  @Post()
  async create(@Body() createOfficeDto: CreateOfficeDto) {
    return await this.officesService.create(createOfficeDto);
  }

  @Get()
  async findAll() {
    return await this.officesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.officesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateOfficeDto: UpdateOfficeDto) {
    return await this.officesService.update(+id, updateOfficeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.officesService.remove(+id);
  }
}
