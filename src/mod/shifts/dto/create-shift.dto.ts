import { IsArray, IsBoolean, IsNotEmpty, IsNumber, IsObject, IsOptional, Length } from "class-validator"
import { Schedule } from "src/mod/schedules/entities/schedule.entity"

export class CreateShiftDto {
    @IsNotEmpty()
    @IsNumber()
    @Length(0, 24)
    exit: number

    @IsOptional()
    @IsBoolean()
    status: boolean

    @IsNotEmpty()
    @IsObject()
    schedule: Partial<Schedule>
}

export class CreateShiftListDto {
    @IsArray()
    data: Array<CreateShiftDto>
}
