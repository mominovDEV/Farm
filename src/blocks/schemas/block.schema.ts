import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Speciality } from '../../speciality/schemas/speciality.schema';

export type BlockDocument = HydratedDocument<Block>;

@Schema()
export class Block {
  @Prop({})
  number: number;

  @Prop({})
  description: string;
}
export const BlockSchema = SchemaFactory.createForClass(Block);
