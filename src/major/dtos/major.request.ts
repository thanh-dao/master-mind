import { Length } from 'class-validator';

export class CreateMajorRequest {
  @Length(3, 255)
  name: string;
  @Length(2, 4)
  code: string;
}
