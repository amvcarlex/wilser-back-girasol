import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { ErrorManager } from 'src/conf/error.manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Schedule } from './entities/schedule.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectRepository(Schedule) private readonly scheduleRepository: Repository<Schedule>
  ) { }
  async create(createScheduleDto: CreateScheduleDto) {
    try {
      return await this.scheduleRepository.save(createScheduleDto)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findAll() {
    try {
      return await this.scheduleRepository.find({})

    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findOne(id: number) {
    try {
      return await this.scheduleRepository.findOneBy({ id })
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async update(id: number, updateScheduleDto: UpdateScheduleDto) {
    try {
      return await this.scheduleRepository.update(id, updateScheduleDto)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async remove(id: number) {
    try {
      return await this.scheduleRepository.delete(id)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }
}
