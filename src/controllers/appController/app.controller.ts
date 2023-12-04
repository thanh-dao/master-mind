import { Controller, Get } from '@nestjs/common';
import { AppService } from '../../services/app.service';

@Controller('v1/1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('users')
  getUsers(): Array<any> {
    return this.appService.getUsers();
  }
}
