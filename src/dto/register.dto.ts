import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"
import { Types } from "mongoose"


export class RegisterDto{
    @IsNotEmpty()
    @IsString()
    @MaxLength(250)
    @ApiProperty({type: String, required: true, description: 'User Username', maximum: 250})
    username: string

    @IsNotEmpty()
    @MinLength(6)
    @ApiProperty({type: String, required: true, description: 'User Password', minimum: 6})
    passWord: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, required: true, description: 'User Name and Lastname'})
    name: string
    
    @IsNotEmpty()
    @ApiProperty({type: String, required: true, description: 'User Tipe of Document, tipe-documents _id', example: '6341b482ee0c46a68e80febc'})
    tipe_document: object
    
    @IsNotEmpty()
    @ApiProperty({type: Number, required: true, description: 'User Document Number'})
    document: number

    @IsNotEmpty()
    @IsString()
    @IsEmail()
    @ApiProperty({type: String, required: true, description: 'User Email', example: 'example@example.com'})
    email: string
    
    @IsNotEmpty()
    @ApiProperty({type: Number, required: true, description: 'User Phone Number'})
    phone: number

    @IsNotEmpty()
    @ApiProperty({type: String, required: true, description: 'User Rol _id', example: '6341b4f9ee0c46a68e80fec0'})
    rol: object
}