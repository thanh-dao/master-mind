import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Post, PostSchema } from './post.entity';
import PostController from './post.controller';
import { PostService } from './post.service';
import { RolesGuard } from 'src/account/guards/role.guard';
import { AccountService } from 'src/account/account.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Post.name,
        schema: PostSchema,
      },
    ]),
  ],
  controllers: [PostController],
  providers: [PostService, RolesGuard, AccountService],
})
export class PostModule {}
