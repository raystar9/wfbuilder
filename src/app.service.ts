import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getMainScreen(): string {
    return 'Hello, world!';
  }
}
