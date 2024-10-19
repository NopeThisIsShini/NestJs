import { Controller, Delete, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller('/user')
export class AppController {
  constructor(private readonly appService: AppService) {}
  // define the route under controller
  // if i here give any route so everytime for all child route i need to define base route, so avoid this i give it in controller 
  
  // defining the base route
  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }
  //now this means /user/santa
  @Get('/santa')
  getPass(): string {
    return 'Hello shinigami!';
  }

  // post 
  @Post('')
  store(@Req() req: Request) {
    console.log(req.body)
    return 'req';
  }

  // params pass in get api
  @Get('/:userId')
  getUserById(@Param() userId: number) {
    return userId;
  }

  @Patch('/:userId')
  update(@Req() req: Request) {
    return req.body
  }
  // delete route 
  @Delete('/:userId')
  deleteUser(@Param() params: { userId: number }) {
    return params; 
  }
}
