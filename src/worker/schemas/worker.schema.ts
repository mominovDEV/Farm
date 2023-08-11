import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Speciality } from '../../speciality/schemas/speciality.schema';

export type WorkerDocument = HydratedDocument<Worker>;

@Schema()
export class Worker {
  @Prop({})
  name: string;

  @Prop({})
  age: number;

  @Prop({ unique: true })
  exprence: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Speciality' })
  speciality_id: Speciality;

  @Prop({})
  phone_number: string;

  @Prop({ unique: true })
  username: string;

  @Prop({})
  worker_schedule: Date;

  @Prop({})
  hashed_token: string;
}

export const WorkerSchema = SchemaFactory.createForClass(Worker);
