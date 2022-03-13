import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post } from '@nestjs/common';
import { IncidencesService } from './incidences.service';

@Controller('incidences')
export class IncidencesController {

  constructor(private incidencesService: IncidencesService) {
  }

  @Get()
  getIncidences() {
    return [];
  }

  @Get(":id")
  getIncidence(@Param("id") id: string) {
    return null;
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  postIncidence(@Body() data: any) {
    return null;
  }

  @Patch(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  updateIncidence(@Param("id") id: string, @Body() data: any) {
    return null;
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  removeIncidence(@Param("id") id: string) {
    return null;
  }
}
