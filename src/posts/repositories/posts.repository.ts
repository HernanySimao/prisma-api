import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
 import { UpdatePostDto } from "../dto/update-post.dto";
import { CreateUserDto } from "src/users/dto/create-user.dto";
import { PostEntity } from "../entities/post.entity";

@Injectable()

export class PostsRepository{
    constructor(private readonly prisma: PrismaService){}

    async create(createPostDto: any): Promise<PostEntity> {
        return await this.prisma.post.create({
           data: createPostDto,
        })
       }
     
      async findAll(): Promise<PostEntity[]> {
         return  this.prisma.post.findMany({
            include:{
                author: true
            }
         })
       }
     
       findOne(id: number): Promise<PostEntity>{
       return this.prisma.post.findUnique({ 
         where: {
             id
         },
         include: {
            author: {
                select:{
                    name: true,
                    email: true,
                    id: true
                }
            }
         }
       })
       }
     
     async update(id: number, UpdatePostDto: UpdatePostDto): Promise<PostEntity> {
         return this.prisma.post.update({
             where: {
                 id
             },
             data: UpdatePostDto
         })
       }
     
      async remove(id: number):Promise<PostEntity> {
         return this.prisma.post.delete({
             where: {
                 id
             }
         });
       }
}