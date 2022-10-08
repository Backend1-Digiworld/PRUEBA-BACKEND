import { Body, Controller, Get, HttpStatus, Param, Patch, Post, Res, Put, UseGuards, Req, HttpException } from '@nestjs/common';
import { ApiBadRequestResponse, ApiBody, ApiCreatedResponse, ApiParam, ApiTags, ApiUnauthorizedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { User, UserInterface } from '../interfaces/user';
import { UserService } from './user.service';
import { UserJwtAuthGuard } from '../guards/jwt-auth.userContract.guard';
import { UserDto } from 'src/dto/user.dto';

@ApiTags('User')
@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @ApiParam({
        name: 'email',
        schema: {
            type: 'string',
            example: 'example@example.com'
        }
    })
    @ApiCreatedResponse({
        description: 'The User has been successfully updated.',
        type: User,
    })
    @ApiBadRequestResponse({description: 'BAD_REQUEST User Update.'})
    @Patch('/virify/:email')
    async verifyUser(@Param('email') email: string, @Res() res): Promise<UserInterface>{
        const user = await this.userService.updateUserVerify(email)
        return res.status(HttpStatus.CREATED).json({user: user})
    }

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @ApiParam({
        name: 'id',
        schema: {
            type: 'string',
            example: '6341b90bfacec9ef21f6b02c'
        }
    })
    @Get('byId/:id')
    @ApiCreatedResponse({
        description: 'The User was successfully found.',
        type: User,
    })
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER OR USERID NOT EQUAL TOKEN'})
    @ApiBadRequestResponse({description: 'BAD_REQUEST User NOT FOUND'})
    async getUserById(@Param('id') userId: string, @Req() req): Promise<UserInterface>{
        if(req.user._id != userId){
            throw new HttpException('USERID NOT EQUAL TOKEN', 401)
        }
        return this.userService.getUserById(userId)
    }

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @ApiParam({
        name: 'rol',
        schema: {
            type: 'string',
            example: '6341b4f9ee0c46a68e80fec0'
        }
    })
    @Get('byRol/:rol')
    @ApiCreatedResponse({
        description: 'The User was successfully found.',
        type: User,
    })
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER'})
    @ApiBadRequestResponse({description: 'BAD_REQUEST User NOT FOUND'})
    async getUsersByRol(@Param('rol') rol: string, @Req() req): Promise<UserInterface[]>{
        return this.userService.getUsersByRol(rol)
    }

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @Get('all')
    @ApiCreatedResponse({
        description: 'The Users were successfully found.',
        type: [User],
    })
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER'})
    @ApiBadRequestResponse({description: 'BAD_REQUEST User NOT FOUND'})
    async getAllUsers(): Promise<UserInterface[]>{
        return this.userService.getAllUsers()
    }

    @UseGuards(UserJwtAuthGuard)
    @ApiBearerAuth()
    @Put('edit/:id')
    @ApiParam({
        name: 'id',
        schema: {
            type: 'string',
            example: '6341b90bfacec9ef21f6b02c'
        }
    })
    @ApiBody({ type: UserDto })
    @ApiCreatedResponse({
        description: 'The Users were successfully found.',
        type: User,
    })
    @ApiUnauthorizedResponse({description: 'UNAUTHORIZE_USER OR USERID NOT EQUAL TOKEN'})
    @ApiBadRequestResponse({description: 'BAD_REQUEST User NOT FOUND'})
    async editUser(@Param('id') userId: string, @Body() userEdit: UserDto, @Req() req): Promise<UserInterface>{
        if(req.user._id != userId){
            throw new HttpException('USERID NOT EQUAL TOKEN', 401)
        }
        return this.userService.editUser(userId, userEdit)
    }
}
