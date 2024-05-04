import { Injectable } from '@nestjs/common';
import { CreateOfficeDto } from './dto/create-office.dto';
import { UpdateOfficeDto } from './dto/update-office.dto';
import { ErrorManager } from 'src/conf/error.manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Office } from './entities/office.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OfficesService {
  constructor(
    @InjectRepository(Office) private readonly officeRepository: Repository<Office>
  ) { }
  async create(createOfficeDto: CreateOfficeDto) {
    try {
      return await this.officeRepository.save(createOfficeDto)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findAll() {
    try {
      return await this.officeRepository.find({})
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findOne(id: number) {
    try {
      return this.officeRepository.findBy({ id })
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async update(id: number, updateOfficeDto: UpdateOfficeDto) {
    try {
      return this.officeRepository.update(id, updateOfficeDto)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async remove(id: number) {
    try {
      return this.officeRepository.delete(id)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }
}
