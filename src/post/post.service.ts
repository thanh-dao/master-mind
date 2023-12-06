import { InjectModel } from '@nestjs/mongoose';
import { Post } from './post.entity';
import { Model } from 'mongoose';
import { CreatePostRequest } from './dtos/post.request';
import { Request } from 'express';

export class PostService {
  constructor(@InjectModel(Post.name) private postModel: Model<Post>) {}
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
}
