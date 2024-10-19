import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  // define the route under controller 
  @Get('/hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
