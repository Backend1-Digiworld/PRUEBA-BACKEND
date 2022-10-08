import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsNotEmpty, IsNumber, IsString, MaxLength, MinLength } from "class-validator"
import { Types } from "mongoose"


export class TaskStudentDto{
    @IsNotEmpty()
    @ApiProperty({type: String, required: true, description: 'Task User Student _id', example: '6341b90bfacec9ef21f6b02c'})
    studentId: object

    @IsNotEmpty()
    @ApiProperty({type: String, required: true, description: 'Task User Professor _id', example: '6341c91bbb849ec4de641431'})
    professorId: object

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, required: true, description: 'Task Name'})
    name: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, required: true, description: 'Task Description'})
    description: string

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, required: true, description: 'Task Solution'})
    solution: string
}

export class TaskProfessorDto{
    @IsNotEmpty()
    @ApiProperty({type: Number, required: true, description: 'Task Calification'})
    calification: number

    @IsNotEmpty()
    @IsString()
    @ApiProperty({type: String, required: true, description: 'Task Observations'})
    observations: string
}