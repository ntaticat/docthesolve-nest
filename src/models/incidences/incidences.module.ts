import { Module } from '@nestjs/common';
import { IncidencesService } from './incidences.service';
import { IncidencesController } from './incidences.controller';

@Module({
  providers: [IncidencesService],
  controllers: [IncidencesController]
})
export class IncidencesModule {}
