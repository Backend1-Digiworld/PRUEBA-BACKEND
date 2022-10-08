import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"
import { Types } from "mongoose"


export class UserDto{
    @ApiProperty({type: String, required: true, description: 'User Name and Lastname'})
    name: string
    
    @ApiProperty({type: String, required: true, description: 'User Tipe of Document, tipe-documents _id', example: '6341b482ee0c46a68e80febc'})
    tipe_document: object
    
    @ApiProperty({type: Number, required: true, description: 'User Document Number'})
    document: number

    @ApiProperty({type: String, required: true, description: 'User Email', example: 'example@example.com'})
    email: string
    
    @ApiProperty({type: Number, required: true, description: 'User Phone Number'})
    phone: number

    @ApiProperty({type: String, description: 'User Rol, rol _id', example:"6341b4f9ee0c46a68e80fec0"})
    rol: object

    @ApiProperty({type: Boolean, description: 'User Active?'})
    active: boolean
}