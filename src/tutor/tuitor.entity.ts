import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

@Schema()
export class Tutor {
  @Prop({
    type: Types.ObjectId,
    ref: 'Account',
    required: true,
  })
  accountId: Types.ObjectId;

  @Prop()
  rating: number;
}
export type TutorDocument = HydratedDocument<Tutor>;
export const TutorSchema = SchemaFactory.createForClass(Tutor);
