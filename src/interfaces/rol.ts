import { ApiProperty } from '@nestjs/swagger';
import {Types} from 'mongoose';

export interface RolInterface{
    _id: Types.ObjectId
    name: string
}

export class Rol{
    @ApiProperty({type: String, description: 'Rol _id'})
    _id: Types.ObjectId
    @ApiProperty({type: String, description: 'Rol Name'})
    name: string
}