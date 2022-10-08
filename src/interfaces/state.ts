import { ApiProperty } from '@nestjs/swagger';
import {Types} from 'mongoose';

export interface StateInterface{
    _id: Types.ObjectId
    name: string
}

export class State{
    @ApiProperty({type: String, description: 'State _id'})
    _id: Types.ObjectId
    @ApiProperty({type: String, description: 'State Name'})
    name: string
}