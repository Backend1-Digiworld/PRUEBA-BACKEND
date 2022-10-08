import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import {Types} from 'mongoose';

export interface UserInterface{
    _id?: Types.ObjectId
    username: string
    passWord?: string
    name: string
    tipe_document?: object
    document?: number
    email: string
    phone: number
    rol?: object
    createdAt?: Date
    updatedAt?: Date
    active?: boolean
    verify?: boolean
}

export class User{
    @ApiProperty({type: String, description: 'User _id'})
    _id: Types.ObjectId
    @ApiProperty({type: String, description: 'User username'})
    username: string
    @ApiProperty({type: String, description: 'User Protected Password'})
    passWord: string
    @ApiProperty({type: String, description: 'User Name and Lastname'})
    name: string
    @ApiProperty({type: String, description: 'User Tipe of Document, tipe-documents _id'})
    tipe_document: object
    @ApiProperty({type: Number, description: 'User Document Number'})
    document: number
    @ApiProperty({type: String, description: 'User Email'})
    email: string
    @ApiProperty({type: Number, description: 'User phone Number'})
    phone: number
    @ApiProperty({type: String, description: 'User Rol, rol _id'})
    rol: object
    @ApiProperty({type: String, description: 'User Created Date'})
    createdAt: Date
    @ApiProperty({type: String, description: 'User Last Updated Date'})
    updatedAt: Date
    @ApiProperty({type: Boolean, description: 'User Active?'})
    active: boolean
    @ApiProperty({type: Boolean, description: 'User Verify?'})
    verify: boolean
}

export class UserLogin{
    @ApiProperty({type: User, description: 'User'})
    user: User
    @ApiProperty({type: String, description: 'User Session Token'})
    token: string
}