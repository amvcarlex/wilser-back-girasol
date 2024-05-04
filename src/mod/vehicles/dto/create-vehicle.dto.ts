import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator"

export class CreateVehicleDto {

    @IsNotEmpty()
    @IsString()
    @Length(4,50)
    id: string //placa

    @IsNotEmpty()
    @IsString()
    brand: string

    @IsNotEmpty()
    @IsNumber()
    capacity: number //capacidad

    @IsOptional()
    @IsBoolean()
    status: boolean
}
