import { Module } from '@nestjs/common';
import { TravelsService } from './travels.service';
import { TravelsController } from './travels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Travel } from './entities/travel.entity';
import { TicketsService } from '../tickets/tickets.service';
import { TicketsModule } from '../tickets/tickets.module';

@Module({
  controllers: [TravelsController],
  providers: [TravelsService, TicketsService],
  imports: [ TicketsModule, TypeOrmModule.forFeature([Travel])]
})
export class TravelsModule {}
