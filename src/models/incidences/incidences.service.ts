import { Injectable } from '@nestjs/common';

@Injectable()
export class IncidencesService {
  getMensaje() {
    return {
      hello: "World"
    };
  }
}
