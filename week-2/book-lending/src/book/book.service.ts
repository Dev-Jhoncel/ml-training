import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBookDto: CreateBookDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.book.create({
          data: createBookDto,
        });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  findAll() {
    return this.prisma.book.findMany();
  }

  findOne(id: number) {
    return this.prisma.book.findUniqueOrThrow({ where: { book_id: id } });
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.book.update({
          where: { book_id: id },
          data: updateBookDto,
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
        return await transaction.book.delete({
          where: { book_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
