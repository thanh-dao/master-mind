import { InjectModel } from '@nestjs/mongoose';
import { Post } from './post.entity';
import { Model } from 'mongoose';
import { CreatePostRequest } from './dtos/post.request';
import { Request } from 'express';
import { PostReaction } from 'src/post-reaction/post-reaction.entity';
export class PostService {
  constructor(
    @InjectModel(Post.name) private postModel: Model<Post>,
    @InjectModel(PostReaction.name)
    private postReactionModel: Model<PostReaction>,
  ) {}
  async findAll(): Promise<Post[]> {
    return this.postModel.find();
  }
  async findById(id: string): Promise<Post> {
    return this.postModel.findById(id);
  }
  async create(post: CreatePostRequest, req: Request): Promise<Post> {
    const currentUser = req['user'];
    console.log(currentUser);
    const createdPost = new this.postModel(post);
    createdPost.status = 'ACTIVE';
    createdPost.postedBy = currentUser._id;
    return createdPost.save();
  }
  async reactPost(postId: string, reactId: string, req: Request) {
    const currentUser = req['user'];
    const updateOptions = {
      upsert: true, // Create a new document if not found
      new: true, // Return the updated document
    };
    const postReaction = await this.postReactionModel.findOneAndUpdate(
      {
        postId,
        accountId: currentUser._id,
      },
      {
        reactId,
      },
      updateOptions,
    );

    if (postReaction.isNew) {
      await this.postModel.findByIdAndUpdate(postId, {
        $inc: { totalReactions: 1 },
      });
    }
    return postReaction.isNew;
  }
}
