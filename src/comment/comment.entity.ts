import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ timestamps: true })
export class Comment {
  @Prop({
    type: Types.ObjectId,
    ref: 'Post',
    required: true,
  })
  postId: Types.ObjectId;

  @Prop({ required: true })
  status: number;

  @Prop({ required: true })
  content: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Account',
    required: true,
  })
  userId: Types.ObjectId;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
