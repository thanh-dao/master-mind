import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Major {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  code: string;
}
export type MajorDocument = HydratedDocument<Major>;
export const MajorSchema = SchemaFactory.createForClass(Major);
