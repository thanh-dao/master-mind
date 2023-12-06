import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Major, MajorDocument } from './major.entity';
import { InjectModel } from '@nestjs/mongoose';
import { CreateMajorRequest } from './dtos/major.request';

@Injectable()
export class MajorService {
  constructor(
    @InjectModel(Major.name) private majorModel: Model<MajorDocument>,
  ) {}
  async createMajor(request: CreateMajorRequest) {
    const major = new this.majorModel(request);
    const exitstingMajor = await this.majorModel.findOne({
      $or: [{ name: request.name }, { code: request.code }],
    });
    if (exitstingMajor) {
      throw new HttpException(
        "Major's name or code is already exists",
        HttpStatus.BAD_REQUEST,
      );
    }
    return await major.save();
  }
  async findAllMajors() {
    return await this.majorModel.find().exec();
  }
}
