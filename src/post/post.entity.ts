import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { PostImage } from './post-image.entity';

@Schema({ timestamps: true })
export class Post {
  @Prop({
    type: Types.ObjectId,
    ref: 'Account',
    required: true,
  })
  postedBy: Types.ObjectId;

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true, default: 0 })
  totalReactions: number;

  @Prop({ required: true, default: [] })
  topReactions: Array<string>;

  @Prop({ required: true, enum: ['QUESTION', 'TUTORIAL'] })
  postType: string;

  @Prop({ required: true, enum: [] })
  status: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Major',
    required: true,
  })
  majorId: Types.ObjectId;
  @Prop({ required: true, type: Array<PostImage>, default: [] })
  postImages: Array<PostImage>;
}

export const PostSchema = SchemaFactory.createForClass(Post);
export type PostDocument = HydratedDocument<Post>;
