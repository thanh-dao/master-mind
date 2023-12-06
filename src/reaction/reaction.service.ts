import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reaction } from './reaction.entity';
import { HttpException, HttpStatus } from '@nestjs/common';

export class ReactionService {
  constructor(
    @InjectModel(Reaction.name) private reactionModel: Model<Reaction>,
  ) {}
  async createReaction(name: string) {
    const existedReaction = this.reactionModel.find({ name: name });
    if (existedReaction) {
      throw new HttpException(
        'Reaction already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const reaction = new this.reactionModel();
    reaction.name = name;
    return await reaction.save();
  }
}
