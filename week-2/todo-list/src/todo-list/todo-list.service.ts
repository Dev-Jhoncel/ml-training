import { Injectable } from '@nestjs/common';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TodoListService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTodoListDto: CreateTodoListDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.todos.create({ data: createTodoListDto });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  findAll() {
    try {
      return this.prisma.todos.findMany({
        include: { todo_indicator: { select: { indicator: true } } },
        where: {
          deletedAt: null,
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        transaction.todos.findUnique({
          where: { id, deletedAt: null },
        });
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateTodoListDto: UpdateTodoListDto) {
    updateTodoListDto.updatedAt = new Date();
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.todos.update({
          where: { id, deletedAt: null },
          data: updateTodoListDto,
        });
      });
    } catch (error) {
      console.log(`Patch: ${error.message}`);
      return error.message;
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.todos.delete({
          where: { id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
