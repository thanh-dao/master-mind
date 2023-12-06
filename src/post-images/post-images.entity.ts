import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

@Schema({ timestamps: true })
export class PostImage {
  @Prop()
  imageLink: string;

  @Prop({ required: true })
  status: string;

  @Prop({
    type: Types.ObjectId,
    ref: 'Post',
    required: true,
  })
  postId: Types.ObjectId;
}
export type PostImageDocument = HydratedDocument<PostImage>;
export const PostImageSchema = SchemaFactory.createForClass(PostImage);
