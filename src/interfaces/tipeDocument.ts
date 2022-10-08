import { ApiProperty } from '@nestjs/swagger';
import {Types} from 'mongoose';

export interface TipeDocumentInterface{
    _id: Types.ObjectId
    name: string
}

export class TipeDocument{
    @ApiProperty({type: String, description: 'Tipe Document _id'})
    _id: Types.ObjectId
    @ApiProperty({type: String, description: 'Tipe Document Name'})
    name: string
}