import { IsBoolean, IsNotEmpty, IsOptional, IsString, Length } from "class-validator"

export class CreateOfficeDto {
    @IsNotEmpty()
    @IsString()
    @Length(2,150)
    name: string

    @IsOptional()
    @IsBoolean()
    status: boolean
}
