import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { messaga: string } {
    return { messaga: 'Hello World!' };
  }
}
