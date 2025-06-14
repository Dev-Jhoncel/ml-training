import { Injectable } from '@nestjs/common';
import { CreateOperatorDto } from './dto/create-operator.dto';
import { UpdateOperatorDto } from './dto/update-operator.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class OperatorService {
  prisma = new PrismaService();
  async create(createOperatorDto: CreateOperatorDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.operator.create({ data: createOperatorDto });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  async findAll() {
    return await this.prisma.operator.findMany();
  }

  async findOne(id: number) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        transaction.operator.findUnique({
          where: { operator_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateOperatorDto: UpdateOperatorDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.operator.update({
          where: { operator_id: id },
          data: updateOperatorDto,
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
        return await transaction.operator.delete({
          where: { operator_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
