import { Injectable } from '@nestjs/common';
import { TipeDocumentInterface } from '../interfaces/tipeDocument'
import { InjectModel } from '@nestjs/mongoose';
import { TipeDocument, TipeDocumentDocument } from '../schemas/tipe-document.schema';
import { Model } from 'mongoose';

@Injectable()
export class TipeDocumentService {
    constructor(@InjectModel(TipeDocument.name) private tipeDocumentModel: Model<TipeDocumentDocument>) {}

    async getTipeDocuments(): Promise<TipeDocumentInterface[]>{
        return this.tipeDocumentModel.find()
    }

    async getTipeDocumentById(id: string): Promise<TipeDocumentInterface[]>{
        return this.tipeDocumentModel.findById(id)
    }
}
