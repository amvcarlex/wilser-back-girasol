import { IsBoolean, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Length } from "class-validator"

export class CreateDriverDto {
    @IsNotEmpty()
    @Length(8, 20)
    id: string //DNI

    @IsNotEmpty()
    @IsString()
    @Length(4, 150)
    names: string

    @IsNotEmpty()
    @IsNumberString()
    @Length(9,11)
    phone: string

    @IsOptional()
    @IsBoolean()
    status: boolean

    @IsOptional()
    @IsString()
    photo?: string
}
