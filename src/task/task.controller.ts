import { Controller, Get, Param, Body, Put, Patch, HttpStatus, Res, Req, UseGuards, Post, Delete } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiFoundResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';
import { TaskProfessorDto, TaskStudentDto } from 'src/dto/task.dto';
import { UserJwtAuthGuard } from 'src/guards/jwt-auth.userContract.guard';
import { Task, TaskInterface } from '../interfaces/task';
import { TaskService } from './task.service';

@ApiTags('Task')
@Controller('task')
export class TaskController {
    constructor(private taskService: TaskService ) {}

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @Get('all')
    @ApiOkResponse({
        description: 'The Tasks were successfully found.',
        type: [Task],
    })
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER'})
    async getTasks(@Res() res):Promise<TaskInterface[]>{
        const tasks = await this.taskService.getTasks()
        return res.status(HttpStatus.OK).json(tasks)
    }

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @ApiParam({
        name: 'professorId',
        schema: {
            type: 'string',
            example: '6341c91bbb849ec4de641431'
        }
    })
    @Get('byProfessor/:professorId')
    @ApiOkResponse({
        description: 'The Tasks were successfully found.',
        type: [Task],
    })
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER'})
    async getTasksByProfessor(@Res() res, @Param('professorId') professorId:string):Promise<TaskInterface[]>{
        const tasks =  await this.taskService.getTasksByProfessor(professorId)
        return res.status(HttpStatus.OK).json(tasks)
    }

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @ApiParam({
        name: 'studentId',
        schema: {
            type: 'string',
            example: '6341b90bfacec9ef21f6b02c'
        }
    })
    @Get('byStudent/:studentId')
    @ApiOkResponse({
        description: 'The Tasks were successfully found.',
        type: [Task],
    })
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER'})
    async getTasksByStudent(@Res() res, @Param('studentId') studentId:string):Promise<TaskInterface[]>{
        const tasks =  await this.taskService.getTasksByStudent(studentId)
        return res.status(HttpStatus.OK).json(tasks)
    }

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @ApiParam({
        name: 'id',
        schema: {
            type: 'string',
            example: '63112437dd037386f04bbb63'
        }
    })
    @ApiOkResponse({
        description: 'The Task was successfully found.',
        type: Task,
    })
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER'})
    @Get('byId/:id')
    async getTaskById(@Res() res, @Param('id') id:string):Promise<TaskInterface>{
        const task =  await this.taskService.getTaskById(id)
        return res.status(HttpStatus.OK).json(task)
    }

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @ApiBody({ type: TaskStudentDto })
    @ApiCreatedResponse({
        description: 'The Task has been successfully created.',
        type: Task,
    })
    @ApiBadRequestResponse({description: 'BAD_REQUEST Task Create.'})
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER'})
    @Post('/create')
    async createTask(@Body() TaskStudentDto: TaskStudentDto, @Res() res): Promise<TaskInterface>{
        const task = await this.taskService.createTask(TaskStudentDto)
        return res.status(HttpStatus.CREATED).json(task)
    }

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @ApiBody({ type: TaskProfessorDto })
    @ApiParam({
        name: 'id',
        schema: {
            type: 'string',
            example: '63112437dd037386f04bbb63'
        }
    })
    @ApiCreatedResponse({
        description: 'The Task has been successfully updated.',
        type: Task,
    })
    @ApiBadRequestResponse({description: 'BAD_REQUEST Task Update.'})
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER'})
    @Put('/update/:id')
    async updateCity(@Body() TaskProfessorDto: TaskProfessorDto, @Param('id') id: string, @Res() res): Promise<TaskInterface>{
        const task = await this.taskService.updateTask(id, TaskProfessorDto)
        return res.status(HttpStatus.CREATED).json(task)
    }

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @ApiParam({
        name: 'id',
        schema: {
            type: 'string',
            example: '63112437dd037386f04bbb63'
        }
    })
    @ApiOkResponse({
        description: 'The Task has been successfully deleted.',
        type: Task,
    })
    @ApiBadRequestResponse({description: 'BAD_REQUEST Task Delete.'})
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER'})
    @Delete('/delete/:id')
    async deleteTask(@Param('id') id: string, @Res() res): Promise<TaskInterface>{
        const task = await this.taskService.deleteTask(id)
        return res.status(HttpStatus.OK).json(task)
    }
}
