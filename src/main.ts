import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const mongoose = require("mongoose")
const url = 'mongodb+srv://thien:ogZA3gRzecAytn2g@mindmasterminds.jb6xzfh.mongodb.net/MindMasterMinds'
const connect = mongoose.connect(url)
connect.then(db => {
  console.log("data connected")
})
const e = require('./entities/account')

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
