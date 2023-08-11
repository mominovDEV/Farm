import { Schema } from '@nestjs/mongoose';
import mongoose from 'mongoose';
export class CreateWorkerDto {
  name: string;

  age: number;

  exprence: number;

  speciality_id: mongoose.Schema.Types.ObjectId;

  phone_number: string;

  username: string;

  worker_schedule: Date;

  hashed_token: string;
}
