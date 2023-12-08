import { RolesGuard } from 'src/account/guards/role.guard';
import ReactionController from './reaction.controller';
import { Reaction, ReactionSchema } from './reaction.entity';
import { ReactionService } from './reaction.service';
import { AccountService } from 'src/account/account.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Reaction.name,
        schema: ReactionSchema,
      },
    ]),
  ],
  controllers: [ReactionController],
  providers: [RolesGuard, AccountService, ReactionService],
})
export class ReactionModule {}
