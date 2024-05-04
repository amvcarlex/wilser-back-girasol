import { IsBoolean, IsDate, IsDateString, IsNotEmpty, IsObject, IsOptional } from "class-validator"
import { Office } from "src/mod/offices/entities/office.entity"

export class CreateScheduleDto {
    
    @IsNotEmpty()
    @IsDate()
    date: Date

    @IsOptional()
    @IsBoolean()
    status: boolean

    @IsNotEmpty()
    @IsObject()
    office: Partial<Office>
}
