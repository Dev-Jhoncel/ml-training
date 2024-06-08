import { Injectable } from '@nestjs/common';
import { CreateInterlibraryLoanDto } from './dto/create-interlibrary_loan.dto';
import { UpdateInterlibraryLoanDto } from './dto/update-interlibrary_loan.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InterlibraryLoanService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createInterlibraryLoanDto: CreateInterlibraryLoanDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.interlibrary_loan.create({
          data: createInterlibraryLoanDto,
        });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  findAll() {
    try {
      return this.prisma.interlibrary_loan.findMany({
        include: {
          book: {
            select: {
              title: true,
              author: true,
              category_id: true,
              no_of_copiies: true,
            },
          },
          librarian: {
            select: { fullname: true, mobile_no: true, email: true },
          },
          borrower: {
            select: { fullname: true, mobile_no: true, address: true },
          },
          action: { select: { action_name: true } },
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  findOne(id: number) {
    try {
      return this.prisma.interlibrary_loan.findUnique({
        include: {
          book: {
            select: {
              title: true,
              author: true,
              category_id: true,
              no_of_copiies: true,
            },
          },
          librarian: {
            select: { fullname: true, mobile_no: true, email: true },
          },
          borrower: {
            select: { fullname: true, mobile_no: true, address: true },
          },
          action: { select: { action_name: true } },
        },
        where: { id: id },
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(
    id: number,
    updateInterlibraryLoanDto: UpdateInterlibraryLoanDto,
  ) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.interlibrary_loan.update({
          where: { id: id },
          data: updateInterlibraryLoanDto,
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
        return await transaction.interlibrary_loan.delete({
          where: { id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
