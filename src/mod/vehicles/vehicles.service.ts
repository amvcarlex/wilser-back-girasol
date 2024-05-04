import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { UpdateVehicleDto } from './dto/update-vehicle.dto';
import { ErrorManager } from 'src/conf/error.manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Vehicle } from './entities/vehicle.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VehiclesService {
  constructor(
    @InjectRepository(Vehicle) private readonly vehicleRepository: Repository<Vehicle>
  ) { }
  async create(createVehicleDto: CreateVehicleDto) {
    try {
      return this.vehicleRepository.save(createVehicleDto)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findAll() {
    try {
      return this.vehicleRepository.find({})
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findOne(id: string) {
    try {
      return this.vehicleRepository.findOneBy({ id })
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async update(id: string, updateVehicleDto: UpdateVehicleDto) {
    try {
      return this.vehicleRepository.update(id, updateVehicleDto)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async remove(id: string) {
    try {
      return this.vehicleRepository.delete(id)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }
}
