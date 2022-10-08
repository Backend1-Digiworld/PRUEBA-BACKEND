import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { City } from './city.schema';
import { Rol } from './rol.schema';
import { TipeDocument } from './tipe-document.schema';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({require: true, unique: true})
  username: string;

  @Prop()
  passWord: string;

  @Prop({require: true})
  name: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'TipeDocument' })
  tipe_document: TipeDocument;

  @Prop()
  document: number;

  @Prop({require: true, unique: true})
  email: string;

  @Prop({require: true, unique: true})
  phone: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Rol' })
  rol: Rol;

  @Prop({default: Date.now(), require: true})
  createAt: Date;

  @Prop({default: Date.now(), require: true})
  updateAt: Date;

  @Prop()
  active: boolean;

  @Prop()
  verify: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);