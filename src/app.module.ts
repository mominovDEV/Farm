import { JwtModule } from '@nestjs/jwt';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AdminModule } from './admin/admin.module';
import { SpecialityModule } from './speciality/speciality.module';
import { BlocksModule } from './blocks/blocks.module';
import { WorkerModule } from './worker/worker.module';
import { InfoModule } from './info/info.module';
import { FeddingModule } from './fedding/fedding.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AdminModule,
    SpecialityModule,
    BlocksModule,
    WorkerModule,
    InfoModule,
    FeddingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
