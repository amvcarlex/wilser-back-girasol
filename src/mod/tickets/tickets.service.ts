import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { UpdateTicketDto } from './dto/update-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';
import { ErrorManager } from 'src/conf/error.manager';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket) private readonly ticketRepository: Repository<Ticket>
  ) { }
  async create(createTicketDto: CreateTicketDto[]) {
    try {
      return await this.ticketRepository.save(createTicketDto);      
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async findAll() {
    try {
      return await this.ticketRepository.find({});
    } catch (error) {
      ErrorManager.createSignatureError(error.message)      
    }
  }

  async findOne(id: number) {
    try {
      return  await this.ticketRepository.findOneBy({id});      
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async update(id: number, updateTicketDto: UpdateTicketDto) {
    try {
      return await this.ticketRepository.update(id, updateTicketDto)      
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }

  async remove(id: number) {
    try {
      return  await this.ticketRepository.delete(id)      
    } catch (error) {
      ErrorManager.createSignatureError(error.message)
    }
  }
}
