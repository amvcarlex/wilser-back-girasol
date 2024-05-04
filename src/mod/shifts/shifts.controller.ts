import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShiftsService } from './shifts.service';
import { CreateShiftDto, CreateShiftListDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';

@Controller('shifts')
export class ShiftsController {
  constructor(private readonly shiftsService: ShiftsService) {}

  @Post()
  async create(@Body() createShiftDto: CreateShiftListDto) {
    return await this.shiftsService.create(createShiftDto);
  }

  @Get()
  async findAll() {
    return await this.shiftsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.shiftsService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateShiftDto: UpdateShiftDto) {
    return await this.shiftsService.update(+id, updateShiftDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.shiftsService.remove(+id);
  }
}
