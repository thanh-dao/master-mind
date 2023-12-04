import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  // eslint-disable-next-line prettier/prettier
  getUsers(): Array<any> {
    return [
      { id: 1, name: 'John Doe' },
      { id: 2, name: 'Jane Doe' },
      { id: 3, name: 'Johnny Turk' },
    ];
  }
}
