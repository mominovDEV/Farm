import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type feddingDocument = HydratedDocument<Fedding>;

@Schema()
export class Fedding {
  @Prop({})
  animal_id: number;

  @Prop({})
  fedding_schedules: string;

  @Prop({})
  types_of_feed: string;

  @Prop({})
  dietary: string;

  @Prop({})
  worker_id: number;
}

export const FeddingSchema = SchemaFactory.createForClass(Fedding);
