import { Injectable } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { ErrorManager } from 'src/conf/error.manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Driver } from './entities/driver.entity';

@Injectable()
export class DriversService {
  constructor(
    @InjectRepository(Driver) private readonly driveRepository: Repository<Driver>
  ) { }
  async create(createDriverDto: CreateDriverDto) {
    try {
      return this.driveRepository.save(createDriverDto)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findAll() {
    try {
      return this.driveRepository.find({})
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findOne(id: string) {
    try {
      return this.driveRepository.findOneBy({ id })
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async update(id: string, updateDriverDto: UpdateDriverDto) {
    try {
      return this.driveRepository.update(id, updateDriverDto)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async remove(id: string) {
    try {
      return this.driveRepository.delete(id)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }
}
