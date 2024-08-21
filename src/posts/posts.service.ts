import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsRepository } from './repositories/posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly PostsRepository: PostsRepository){}
  
  create(createPostDto: CreatePostDto) {
    return this.PostsRepository.create(createPostDto);
  }

  findAll() {
    return this.PostsRepository.findAll();
  }

  findOne(id: number) {
    return this.PostsRepository.findOne(id);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return this.PostsRepository.update(id, updatePostDto);
  }

  remove(id: number) {
    return this.PostsRepository.remove(id);
  }
}
