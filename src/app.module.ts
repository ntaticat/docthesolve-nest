import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IncidencesModule } from './models/incidences/incidences.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    IncidencesModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
