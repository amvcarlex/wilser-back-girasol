import { Injectable } from '@nestjs/common';
import { CreateShiftDto, CreateShiftListDto } from './dto/create-shift.dto';
import { UpdateShiftDto } from './dto/update-shift.dto';
import { ErrorManager } from 'src/conf/error.manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Shift } from './entities/shift.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShiftsService {
  constructor(
    @InjectRepository(Shift) private readonly shiftRepository: Repository<Shift>
  ) { }
  async create(createShiftDto: CreateShiftListDto) {
    try {
      const { data } = createShiftDto
      return await this.shiftRepository.save(data)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findAll() {
    try {
      return this.shiftRepository.find({})
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findOne(id: number) {
    try {

    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async update(id: number, updateShiftDto: UpdateShiftDto) {
    try {

    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async remove(id: number) {
    try {

    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }
}
