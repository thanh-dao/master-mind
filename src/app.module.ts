import { Module } from '@nestjs/common';
import { AppController } from './controllers/appController/app.controller';
import { AppService } from './services/app.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from './account/account.module';
import { PostModule } from './post/post.module';
import { MajorModule } from './major/major.module';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    AccountModule,
    PostModule,
    MajorModule,
  ],
})
export class AppModule {}
