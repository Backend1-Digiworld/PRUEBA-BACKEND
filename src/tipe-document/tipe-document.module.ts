import { Module } from '@nestjs/common';
import { TipeDocumentController } from './tipe-document.controller';
import { TipeDocumentService } from './tipe-document.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TipeDocument, TipeDocumentSchema } from '../schemas/tipe-document.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: TipeDocument.name, schema: TipeDocumentSchema }])],
    controllers: [TipeDocumentController],
    providers: [TipeDocumentService],
})
export class TipeDocumentModule {}
