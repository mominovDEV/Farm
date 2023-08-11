import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SpecialityDocument = HydratedDocument<Speciality>;

@Schema()
export class Speciality {
  @Prop({})
  title: string;

  @Prop({})
  description: string;
}

export const SpecialitySchema = SchemaFactory.createForClass(Speciality);
