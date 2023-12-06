import {
  ArrayMaxSize,
  ArrayMinSize,
  IsNotEmpty,
  ValidateNested,
} from 'class-validator';
import { PostImage } from '../post-image.entity';
import { Type } from 'class-transformer';

export class CreatePostRequest {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  majorId: string;
  @IsNotEmpty()
  postType: string;
  @ArrayMinSize(0)
  @ArrayMaxSize(5)
  @ValidateNested({ each: true })
  @Type(() => PostImage)
  postImages: PostImage[];
}
