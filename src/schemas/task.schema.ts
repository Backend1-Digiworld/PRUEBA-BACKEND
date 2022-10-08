import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import * as mongoose from 'mongoose';
import { User } from './user.schema';

export type TaskDocument = Task & Document;

@Schema()
export class Task {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    studentId: User;

    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
    professorId: User;

    @Prop({require: true})
    name: string;

    @Prop({require: true})
    description: string;

    @Prop({require: true})
    solution: string;

    @Prop()
    calification: number;

    @Prop()
    observations: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);