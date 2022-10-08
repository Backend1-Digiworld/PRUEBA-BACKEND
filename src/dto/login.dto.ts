import { ApiProperty } from "@nestjs/swagger"
import {IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator"

export class LoginDto{
    @IsNotEmpty()
    @IsString()
    @MaxLength(250)
    @ApiProperty({type: String, required: true, description: 'User Username or Email', maximum: 250})
    userinfo: string


    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({type: String, required: true, description: 'User Password', minimum: 6})
    passWord: string
}
