import { Injectable } from '@nestjs/common';
import * as dotenv from "dotenv";

@Injectable()
export class AppService {

  constructor() {
    dotenv.config({ path: '.env' });
  }

  getVersion(): string {
    return `vacPet API ${process.env.API_VERSION}`;
  }
}
