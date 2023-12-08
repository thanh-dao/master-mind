import {
  Controller,
  Post,
  Get,
  Body,
  Param,
  UseGuards,
  Req,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostRequest } from './dtos/post.request';
import { AuthGuard } from 'src/account/guards/auth.guard';
import { RolesGuard } from 'src/account/guards/role.guard';
import { Roles } from 'src/account/decorators/role.decorator';
import { Request, Response } from 'express';
@Controller('posts')
export default class PostController {
  constructor(private readonly postService: PostService) {}
  @Get()
  async findAll() {
    return this.postService.findAll();
  }
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.postService.findById(id);
  }
  @Post()
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('USER', 'TUTOR')
  async create(@Body() body: CreatePostRequest, @Req() req: Request) {
    return this.postService.create(body, req);
  }
  @Post('/reactions/:id')
  @UseGuards(AuthGuard, RolesGuard)
  @Roles('USER', 'TUTOR')
  async reactPost(
    @Body() reactId: string,
    @Req() req: Request,
    @Param('id') id: string,
    @Res({ passthrough: true }) res: Response,
  ) {
    await this.postService.reactPost(id, reactId, req);
    res.status(HttpStatus.OK);
  }
}
