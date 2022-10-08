import { Controller, Post, Body, Req, Param } from '@nestjs/common';
import { AuthService } from './auth.service';
import {RegisterDto} from '../dto/register.dto'
import {LoginDto} from '../dto/login.dto'
import {UserInterface, User, UserLogin} from '../interfaces/user'
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService ) {}

    @ApiBody({ type: RegisterDto })
    @Post('register')
    @ApiCreatedResponse({
        description: 'The user has been successfully created.',
        type: User,
    })
    @ApiBadRequestResponse({description: 'BAD_REQUEST User Create.'})
    createFullRegister(@Body() registerInfo: RegisterDto): Promise<UserInterface>{
        return this.authService.createFullRegister(registerInfo)
    }
    
    @ApiBody({ type: LoginDto })
    @Post('login')
    @ApiOkResponse({
        description: 'The user has successfully login.',
        type: UserLogin,
    })
    @ApiNotFoundResponse({description: 'USER_NOT_FOUND'})
    @ApiForbiddenResponse({description: 'PASSWORD_INCORRECT'})
    @ApiBadRequestResponse({description: 'BAD_REQUEST User Create.'})
    login(@Body() userLogin: LoginDto){
        return this.authService.login(userLogin)
    }
}
