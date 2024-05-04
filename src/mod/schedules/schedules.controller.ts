import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';

@Controller('schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) { }

  @Post()
  async create(@Body() createScheduleDto: CreateScheduleDto) {
    return await this.schedulesService.create(createScheduleDto);
  }

  @Get()
  async findAll() {
    return await this.schedulesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.schedulesService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateScheduleDto: UpdateScheduleDto) {
    return await this.schedulesService.update(+id, updateScheduleDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.schedulesService.remove(+id);
  }
}
