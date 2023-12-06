import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument, Types } from 'mongoose';

@Schema()
export class Order {
  @Prop({
    type: Types.ObjectId,
    ref: 'Tutor',
    required: true,
  })
  tutorId: Types.ObjectId;

  @Prop({
    type: Types.ObjectId,
    ref: 'Account',
    required: true,
  })
  accountId: Types.ObjectId;

  @Prop({ required: true })
  price: number;

  @Prop({
    type: Types.ObjectId,
    ref: 'TutorApplication',
    required: true,
  })
  applicationId: Types.ObjectId;
}
export type OrderDocument = HydratedDocument<Order>;
export const OrderSchema = SchemaFactory.createForClass(Order);
