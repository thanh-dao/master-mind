import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type AccountDocument = HydratedDocument<Account>;
@Schema()
export class Account {
  @Prop()
  firstName: string;

  @Prop()
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  avatar: string;

  @Prop({ required: true, enum: ['BANNED', 'ACTIVE'] })
  status: string;

  @Prop({ required: true, enum: ['USER', 'ADMIN', 'TUTOR'] })
  role: string;
}

export const AccountSchema = SchemaFactory.createForClass(Account);
