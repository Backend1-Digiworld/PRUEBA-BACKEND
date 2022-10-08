import { Controller, Get, Param, HttpStatus, Res, UseGuards, Post, Patch, Body, Delete } from '@nestjs/common';
import { TipeDocumentService } from './tipe-document.service';
import { TipeDocument, TipeDocumentInterface } from '../interfaces/tipeDocument';
import { ApiBadRequestResponse, ApiBearerAuth, ApiBody, ApiCreatedResponse, ApiOkResponse, ApiParam, ApiTags, ApiUnauthorizedResponse } from '@nestjs/swagger';

@ApiTags('Tipe-documents')
@Controller('tipe-document')
export class TipeDocumentController {
    constructor(private tipeDocumentService: TipeDocumentService ) {}

    @Get('all')
    @ApiOkResponse({
        description: 'The Tipe Documents were successfully found.',
        type: [TipeDocument],
    })
    async getTipeDocuments(@Res() res):Promise<TipeDocumentInterface[]>{
        const tipes = await this.tipeDocumentService.getTipeDocuments()
        return res.status(HttpStatus.OK).json(tipes) 
    }

    @ApiParam({
        name: 'id',
        schema: {
            type: 'string',
            example: '6341b482ee0c46a68e80febc'
        }
    })
    @ApiOkResponse({
        description: 'The Tipe Document were successfully found.',
        type: TipeDocument,
    })
    @Get('byid/:id')
    async getTipeDocumentById(@Res() res, @Param('id') id:string):Promise<TipeDocumentInterface[]>{
        const tipe = await this.tipeDocumentService.getTipeDocumentById(id)
        return res.status(HttpStatus.OK).json(tipe)
    }
}
