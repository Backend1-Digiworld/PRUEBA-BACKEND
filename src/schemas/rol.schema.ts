import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 

export type RolDocument = Rol & Document;

@Schema()
export class Rol {
  @Prop({require: true, unique: true})
  name: string;
}

export const RolSchema = SchemaFactory.createForClass(Rol);