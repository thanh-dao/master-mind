import { Module, Global } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RolesGuard } from 'src/account/guards/role.guard';
import { AccountService } from 'src/account/account.service';
import { PostReaction, PostReactionSchema } from './post-reaction.entity';
import PostReactionController from './post-reaction.controller';
@Global()
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: PostReaction.name,
        schema: PostReactionSchema,
      },
    ]),
  ],
  controllers: [PostReactionController],
  providers: [RolesGuard, AccountService],
  exports: [
    MongooseModule.forFeature([
      {
        name: PostReaction.name,
        schema: PostReactionSchema,
      },
    ]),
  ],
})
export class PostReactionModule {}
