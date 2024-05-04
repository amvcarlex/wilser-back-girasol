import { IsNotEmpty, IsObject } from "class-validator"
import { Driver } from "src/mod/drivers/entities/driver.entity"
import { Shift } from "src/mod/shifts/entities/shift.entity"
import { Vehicle } from "src/mod/vehicles/entities/vehicle.entity"

export class CreateTravelDto {
    @IsNotEmpty()
    @IsObject()
    vehicle: Partial<Vehicle>
    
    @IsNotEmpty()
    @IsObject()
    driver: Partial<Driver>
    
    @IsNotEmpty()
    @IsObject()
    /* @JoinColumn({name: 'shift'}) */
    shift: Partial<Shift>
}
