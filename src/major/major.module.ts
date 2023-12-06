import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Major, MajorSchema } from './major.entity';

import { MajorController } from './major.controller';
import { MajorService } from './major.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Major.name, schema: MajorSchema }]),
  ],
  controllers: [MajorController],
  providers: [MajorService],
})
export class MajorModule {}
