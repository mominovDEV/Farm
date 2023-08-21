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
import { RecordsOfFeddingModule } from './records_of_fedding/records_of_fedding.module';
import { VaccineModule } from './vaccine/vaccine.module';
import { AnimalsModule } from './animals/animals.module';
import { MeatProductsModule } from './meat_products/meat_products.module';
import { FiberProductionModule } from './fiber_production/fiber_production.module';
import { AnimalTypeModule } from './animal_type/animal_type.module';
import { RecordsOfLinessModule } from './records_of_liness/records_of_liness.module';
import { MilkProductionModule } from './milk_production/milk_production.module';
import { VaccinationHistoryModule } from './vaccination_history/vaccination_history.module';

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
    RecordsOfFeddingModule,
    VaccineModule,
    AnimalsModule,
    MeatProductsModule,
    FiberProductionModule,
    AnimalTypeModule,
    RecordsOfLinessModule,
    MilkProductionModule,
    VaccinationHistoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
