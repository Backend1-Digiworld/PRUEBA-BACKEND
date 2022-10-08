import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type TipeDocumentDocument = TipeDocument & Document;

@Schema()
export class TipeDocument {
  @Prop({require: true, unique: true})
  name: string;
}

export const TipeDocumentSchema = SchemaFactory.createForClass(TipeDocument);