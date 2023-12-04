import { Module } from '@nestjs/common';
import { AppController } from './controllers/appController/app.controller';
import { AppService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ConfigModule.forRoot()],
})
export class AppModule { }
