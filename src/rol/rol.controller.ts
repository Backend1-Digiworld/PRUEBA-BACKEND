import { Controller, Get, Param, HttpStatus, Res, UseGuards, Patch, Delete, Post, Body } from '@nestjs/common';
import { RolService } from './rol.service';
import { Rol, RolInterface } from '../interfaces/rol';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('Rol')
@Controller('rol')
export class RolController {
    constructor(private rolService: RolService ) {}

    @Get('all')
    @ApiOkResponse({
        description: 'The Rols were successfully found.',
        type: [Rol],
    })
    async getRols(@Res() res):Promise<RolInterface[]>{
        const rols = await this.rolService.getRols()
        return res.status(HttpStatus.OK).json(rols)
    }

    @ApiParam({
        name: 'id',
        schema: {
            type: 'string',
            example: '6341b4f9ee0c46a68e80fec0'
        }
    })
    @ApiOkResponse({
        description: 'The Rol was successfully found.',
        type: Rol,
    })
    @Get('byid/:id')
    async getRolById(@Param('id') id:string, @Res() res):Promise<RolInterface>{
        const rol = await this.rolService.getRolById(id)
        return res.status(HttpStatus.OK).json(rol)
    }
}
