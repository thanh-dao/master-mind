import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Reaction } from './reaction.entity';
import { HttpException, HttpStatus } from '@nestjs/common';
import { CreateReactionRequest } from './dtos/reaction.request';
import { log } from 'console';

export class ReactionService {
  constructor(
    @InjectModel(Reaction.name) private reactionModel: Model<Reaction>,
  ) {}
  async createReaction(req: CreateReactionRequest) {
    const existedReaction = await this.reactionModel.find({
      name: req.name,
    });
    console.log(existedReaction);

    if (existedReaction.length != 0) {
      throw new HttpException(
        'Reaction already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    const reaction = new this.reactionModel();
    reaction.name = req.name;
    reaction.icon = req.icon;
    return await reaction.save();
  }
  async findAll() {
    return await this.reactionModel.find().exec();
  }
  async findById(id: string) {
    return await this.reactionModel.findById(id).exec();
  }
}
