import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { ReactionService } from './reaction.service';
import { CreateReactionRequest } from './dtos/reaction.request';
@Controller('reactions')
export default class ReactionController {
  constructor(private readonly reactionService: ReactionService) {}
  @Post()
  async createReaction(@Body() req: CreateReactionRequest) {
    return await this.reactionService.createReaction(req);
  }
  @Get()
  async getAllReactions() {
    return await this.reactionService.findAll();
  }
  @Get(':id')
  async getReactionById(@Param('id') id: string) {
    return await this.reactionService.findById(id);
  }
}
