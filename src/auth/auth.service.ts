import { HttpException, Injectable } from '@nestjs/common';
import {UserInterface} from '../interfaces/user'
import {RegisterDto} from '../dto/register.dto'
import {LoginDto} from '../dto/login.dto'
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from '../schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>, private jwtService: JwtService) {}

    async createFullRegister(registerInfo: RegisterDto): Promise<UserInterface>{
        const plainToHash = await bcrypt.hash(registerInfo.passWord, 10)
        let user: UserInterface
        user = {...registerInfo, passWord: plainToHash, active: true, verify: false, email: registerInfo.email.toLowerCase()}

        const createUser = new this.userModel(user);
        return await createUser.save();
    }

    async login(userLogin: LoginDto){
        let findUser = await this.userModel.findOne({username: userLogin.userinfo})
        if(!findUser)  {
            let userinfo = userLogin.userinfo.toLocaleLowerCase()  
            findUser = await this.userModel.findOne({email: userinfo})
            if(!findUser) throw new HttpException('USER_NOT_FOUND', 404)
        }

        const checkPassword = await bcrypt.compare(userLogin.passWord, findUser.passWord)
        
        if(!checkPassword) throw new HttpException('PASSWORD_INCORRECT', 403)

        const payload = {_id: String(findUser._id), name: findUser.name, username: findUser.username, email: findUser.email, rol: String(findUser.rol)}
        
        const token = this.jwtService.sign(payload, {secret:process.env.JWT_SECRET, expiresIn: '12h'})
        const data = {
            user: findUser,
            token: token
        }
        
        return data
    }
}
