import { Injectable } from '@nestjs/common';
import { RolInterface } from '../interfaces/rol'
import { InjectModel } from '@nestjs/mongoose';
import { Rol, RolDocument } from '../schemas/rol.schema';
import { Model} from 'mongoose';

@Injectable()
export class RolService {
    constructor(@InjectModel(Rol.name) private rolModel: Model<RolDocument>) {}

    async getRols(): Promise<RolInterface[]>{
        return this.rolModel.find()
    }

    async getRolById(id: string): Promise<RolInterface>{
        return this.rolModel.findById(id)
    }
}
