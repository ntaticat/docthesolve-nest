import { Body, Controller, Delete, Get, HttpCode, HttpStatus, NotFoundException, Param, Patch, Post } from '@nestjs/common';
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

    if(id === "1") {
      throw new NotFoundException("Ese Id no fue encontrado");
      
    }

    return null;
  }

  @Delete(":id")
  @HttpCode(HttpStatus.NO_CONTENT)
  removeIncidence(@Param("id") id: string) {
    return null;
  }
}
