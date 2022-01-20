import { Controller, Get } from '@nestjs/common';

@Controller('issues')
export class IssuesController {

  @Get()
  getIssues() {
    return "Hola Mundo";
  }
}
