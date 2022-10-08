import { ApiExtraModels, ApiProperty } from '@nestjs/swagger';
import {Types} from 'mongoose';

export interface TaskInterface{
    _id?: Types.ObjectId
    studentId?: object
    professorId?: object
    name?: string
    description?: string
    solution?: string
    calification?: number
    observations?: string
}

export class Task{
    @ApiProperty({type: String, required: true, description: 'Task User Student _id', example: '63118469ef262e4ce80f0430'})
    studentId: object
    @ApiProperty({type: String, required: true, description: 'Task User Professor _id', example: '63118469ef262e4ce80f0430'})
    professorId: object
    @ApiProperty({type: String, required: true, description: 'Task Name'})
    name: string
    @ApiProperty({type: String, required: true, description: 'Task Description'})
    description: string
    @ApiProperty({type: String, required: true, description: 'Task Solution'})
    solution: string
    @ApiProperty({type: Number, required: true, description: 'Task Calification'})
    calification: number
    @ApiProperty({type: String, required: true, description: 'Task Observations'})
    observations: string
}