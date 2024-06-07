import { Injectable } from '@nestjs/common';
import { CreateSupplierDto } from './dto/create-supplier.dto';
import { UpdateSupplierDto } from './dto/update-supplier.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SupplierService {
  prisma = new PrismaService();
  async create(createSupplierDto: CreateSupplierDto) {
    console.log(createSupplierDto);
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.supplier.create({ data: createSupplierDto });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  findAll() {
    return this.prisma.supplier.findMany();
  }

  async findOne(id: number) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        transaction.supplier.findUnique({
          where: { supplier_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateSupplierDto: UpdateSupplierDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.supplier.update({
          where: { supplier_id: id },
          data: updateSupplierDto,
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
        return await transaction.supplier.delete({
          where: { supplier_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
