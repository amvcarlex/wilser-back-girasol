import { IsBoolean, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsNumberString, IsOptional, IsString, Length } from "class-validator"
import { ROLES } from "src/mod/auth/enum/access.enum"

export class CreateUserDto {
    
    @IsNotEmpty()
    @Length(2, 150)
    names: string

    @IsOptional()
    @IsNumberString()
    dni: string

    @IsOptional()
    @IsNumber()
    phone: number

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @Length(2, 150)
    username: string

    @IsNotEmpty()
    @Length(2, 150)
    password: string

    @IsOptional()
    @IsBoolean()
    status: string

    @IsOptional()
    @IsEnum(ROLES)
    role: ROLES
}
