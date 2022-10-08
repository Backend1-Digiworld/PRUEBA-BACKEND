import { ApiProperty } from '@nestjs/swagger';
import {Types} from 'mongoose';

export interface CityInterface{
    _id: Types.ObjectId
    name: string
    state: object
}

export class City{
    @ApiProperty({type: String, description: 'City _id'})
    _id: Types.ObjectId
    @ApiProperty({type: String, description: 'City Name'})
    name: string
    @ApiProperty({type: String, description: 'City State, State _id'})
    state: object
}