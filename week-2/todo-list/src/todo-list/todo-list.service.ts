import { Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoListService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoListDto: CreateTodoListDto) {
    try {
      createTodoListDto.updatedAt = new Date();
      createTodoListDto.deletedAt = new Date();
      return await this.prisma.todos.create({
        data: createTodoListDto,
      });
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  findAll() {
    try {
      return this.prisma.todos.findMany();
    } catch (error) {
      console.log(error.message);
      throw new Error(error.message);
    }
  }

  async findOne(id: number) {
    try {
      const response = await this.prisma.todos.findUnique({
        where: { id: id },
      });
      console.log(response);
      return response;
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateTodoListDto: UpdateTodoListDto) {
    updateTodoListDto.updatedAt = new Date();
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.todos.update({
          where: { id: id },
          data: updateTodoListDto,
        });
      });
    } catch (error) {
      console.log(`Patch: ${error.message}`);
      throw new Error(error.message);
    }
  }

  async remove(id: number) {
    try {
      return await this.prisma.todos.delete({
        where: { id: id },
      });
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
