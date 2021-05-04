import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getObject(): any{
  let object={
    id:1,
    name:"Derek"
  }
  return object
}
}
