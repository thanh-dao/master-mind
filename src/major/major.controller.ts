import { Body, Controller, Post, Get } from '@nestjs/common';
import { MajorService } from './major.service';
import { CreateMajorRequest } from './dtos/major.request';

@Controller('major')
export class MajorController {
  constructor(private readonly majorService: MajorService) {}
  @Post()
  async createMajor(@Body() createMajorRequest: CreateMajorRequest) {
    return await this.majorService.createMajor(createMajorRequest);
  }
  @Get()
  async findAllMajors() {
    return await this.majorService.findAllMajors();
  }
}
