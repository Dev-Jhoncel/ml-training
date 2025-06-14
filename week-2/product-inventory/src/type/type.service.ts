import { Injectable } from '@nestjs/common';
import { CreateTypeDto } from './dto/create-type.dto';
import { UpdateTypeDto } from './dto/update-type.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TypeService {
  prisma = new PrismaService();
  async create(createTypeDto: CreateTypeDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.type_of_product.create({ data: createTypeDto });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  findAll() {
    return this.prisma.type_of_product.findMany();
  }

  findOne(id: number) {
    return this.prisma.type_of_product.findUniqueOrThrow({
      where: { type_id: id },
    });
  }

  async update(id: number, updateTypeDto: UpdateTypeDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.type_of_product.update({
          where: { type_id: id },
          data: updateTypeDto,
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
        return await transaction.type_of_product.delete({
          where: { type_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
