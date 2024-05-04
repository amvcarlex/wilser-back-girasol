import { Module } from '@nestjs/common';

import { AuthModule } from './mod/auth/auth.module';
import { VehiclesModule } from './mod/vehicles/vehicles.module';
import { DriversModule } from './mod/drivers/drivers.module';
import { OfficesModule } from './mod/offices/offices.module';
import { SchedulesModule } from './mod/schedules/schedules.module';
import { ShiftsModule } from './mod/shifts/shifts.module';
import { UsersModule } from './mod/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceConfig } from './db/data.source';
import { TravelsModule } from './mod/travels/travels.module';
import { TicketsModule } from './mod/tickets/tickets.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
    TypeOrmModule.forRoot({ ...DataSourceConfig }),
    AuthModule, 
    VehiclesModule, 
    DriversModule, 
    OfficesModule, 
    SchedulesModule, 
    ShiftsModule, 
    UsersModule, TravelsModule, TicketsModule],
})
export class AppModule {}
