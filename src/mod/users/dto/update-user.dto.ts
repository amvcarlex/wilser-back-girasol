import { PartialType } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';
import { IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @Length(2, 150)
    username: string

    @IsNotEmpty()
    @Length(2, 150)
    password: string
}
