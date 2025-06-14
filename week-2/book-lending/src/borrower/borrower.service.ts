import { Injectable } from '@nestjs/common';
import { CreateBorrowerDto } from './dto/create-borrower.dto';
import { UpdateBorrowerDto } from './dto/update-borrower.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BorrowerService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBorrowerDto: CreateBorrowerDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.borrower.create({
          data: createBorrowerDto,
        });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  findAll() {
    return this.prisma.borrower.findMany();
  }

  findOne(id: number) {
    return this.prisma.borrower.findUniqueOrThrow({
      where: { borrower_id: id },
    });
  }

  async update(id: number, updateBorrowerDto: UpdateBorrowerDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.borrower.update({
          where: { borrower_id: id },
          data: updateBorrowerDto,
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
        return await transaction.borrower.delete({
          where: { borrower_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
