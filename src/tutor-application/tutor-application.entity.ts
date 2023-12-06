import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';
export type TutorApplicationDocument = HydratedDocument<TutorApplication>;
@Schema()
export class TutorApplication {
  @Prop({ required: true })
  price: number;

  @Prop({ required: true })
  dateOfStudy: number;

  @Prop({ required: true })
  numberOfLesson: number;

  @Prop({ type: Types.ObjectId, ref: 'Post', required: true })
  postId: Types.ObjectId;

  @Prop({ type: Types.ObjectId, ref: 'Account', required: true })
  tutorId: Types.ObjectId;
}

export const TutorApplicationSchema =
  SchemaFactory.createForClass(TutorApplication);
