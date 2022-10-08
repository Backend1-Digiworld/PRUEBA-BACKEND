import { State } from './state.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose'; 
import * as mongoose from 'mongoose';

export type CityDocument = City & Document;

@Schema()
export class City {
  @Prop({require: true, unique: true})
  name: string;
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'State', require: true })
  state: State;
}

export const CitySchema = SchemaFactory.createForClass(City);