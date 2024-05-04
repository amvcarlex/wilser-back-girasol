import { Injectable } from '@nestjs/common';
import { CreateTravelDto } from './dto/create-travel.dto';
import { UpdateTravelDto } from './dto/update-travel.dto';
import { ErrorManager } from 'src/conf/error.manager';
import { InjectRepository } from '@nestjs/typeorm';
import { Travel } from './entities/travel.entity';
import { Repository } from 'typeorm';
import { TicketsService } from '../tickets/tickets.service';

@Injectable()
export class TravelsService {
  constructor(
    @InjectRepository(Travel) private readonly travelRepository: Repository<Travel>,
    private readonly _ticketService: TicketsService
  ) { }
  async create(createTravelDto: CreateTravelDto) {
    try {

      const newTravel = await this.travelRepository.save(createTravelDto)
      if (!newTravel) throw new ErrorManager({ type: 'CONFLICT', message: 'NOT FOUND TRAVEL' })

      /* SE CREA LA LISTA DE TIKES SEGUN LA CAPACIDAD DEL VEHÍCULO Y SE INICIALIZA EN DISPONIBLE */
      const data = await this.travelRepository.findOne({
        where: {
          id: newTravel.id
        },
        relations: {
          vehicle: true,
          driver: true,
          shift: true
        }
      })
      if (!data) throw new ErrorManager({ type: 'BAD_REQUEST', message: 'NOT FOUND DATA' })

      let listTikets = []

      for (let i = 1; i <= data.vehicle.capacity; i++) {
        listTikets.push({
          travel: {
            id: newTravel.id
          }
        })
      }

      const tickets = await this._ticketService.create(listTikets)
      if (!tickets) throw new ErrorManager({ type: 'BAD_REQUEST', message: 'NOT FOUND TICKETS' })
      /* FINDE LA LÓGICA */
      return {
        travel: newTravel,
        tickets
      }
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findAll() {
    try {
      return await this.travelRepository.find({
        relations: {
          vehicle: true,
          driver: true,
          shift: true
        }
      })
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findOne(id: number) {
    try {
      return this.travelRepository.findOneBy({ id })
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async update(id: number, updateTravelDto: UpdateTravelDto) {
    try {
      return this.travelRepository.update(id, updateTravelDto)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async remove(id: number) {
    try {
      return this.travelRepository.delete(id)
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }
}
