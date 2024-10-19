import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// @Module makes this nest js module
@Module({
  imports: [],
  // array of controllers
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
