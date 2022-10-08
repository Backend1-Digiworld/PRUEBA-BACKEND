import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { TaskProfessorDto, TaskStudentDto } from 'src/dto/task.dto';
import { TaskInterface } from 'src/interfaces/task';
import { Task, TaskDocument } from '../schemas/task.schema';

@Injectable()
export class TaskService {
    constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

    async getTasks(): Promise<TaskInterface[]>{
        return await this.taskModel.find()
    }

    async getTasksByProfessor(professorId: string): Promise<TaskInterface[]>{
        return await this.taskModel.find({professorId: professorId})
    }

    async getTasksByStudent(studentId: string): Promise<TaskInterface[]>{
        return await this.taskModel.find({studentId: studentId})
    }

    async getTaskById(id: string): Promise<TaskInterface>{
        return await this.taskModel.findById(id)
    }

    async createTask(Task: TaskStudentDto): Promise<TaskInterface>{
        const createTask = new this.taskModel(Task);
        return await createTask.save();
    }

    async deleteTask(id: string): Promise<TaskInterface>{
        return await this.taskModel.findByIdAndDelete(id)
    }

    async updateTask(id: string, Task: TaskProfessorDto): Promise<TaskInterface>{
        return await this.taskModel.findByIdAndUpdate(id, Task, {new: true})
    }
}
