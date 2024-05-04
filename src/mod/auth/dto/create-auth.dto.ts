import { IsEmail, IsNotEmpty, IsString, Length } from "class-validator"

export class AuthDto {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @Length(2, 150)
    username: string

    @IsNotEmpty()
    @Length(2, 150)
    password: string
}
