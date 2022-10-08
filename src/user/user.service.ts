import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import { UserDto } from '../dto/user.dto';
import { UserInterface } from '../interfaces/user';
import { User, UserDocument } from '../schemas/user.schema';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async updateUserVerify(email: string): Promise<UserInterface>{
        email = email.toLowerCase()
        let user = await this.userModel.findOne({email: email})
        
        if(!user) throw new HttpException('USER_NOT_FOUND', 404)
        let id = user._id
        return await this.userModel.findByIdAndUpdate(id,{verify: true},{new: true})
    }

    async getUserById(userId: string): Promise<UserInterface>{
        let user = await this.userModel.findById(userId)
        return user
    }

    async getUsersByRol(rol: string): Promise<UserInterface[]>{
        let user = await this.userModel.find({rol: rol})
        return user
    }

    async getAllUsers(): Promise<UserInterface[]>{
        let user = await this.userModel.find()
        return user
    }

    async editUser(id: string, userInfo: UserDto): Promise<UserInterface>{
        let user = await this.userModel.findById(id)
        
        if(!user) throw new HttpException('USER_NOT_FOUND', 404)
        
        return await this.userModel.findByIdAndUpdate(id,userInfo,{new: true})
    }
}
