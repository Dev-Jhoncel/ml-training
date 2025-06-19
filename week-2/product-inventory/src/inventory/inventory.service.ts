import { Injectable } from '@nestjs/common';
import { CreateInventoryDto } from './dto/create-inventory.dto';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InventoryService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createInventoryDto: CreateInventoryDto) {
    console.log(createInventoryDto);
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.products.create({ data: createInventoryDto });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.prisma.products.findMany({
        include: {
          suppliier: { select: { supplier_name: true } },
          operator: { select: { name: true } },
          type: { select: { type_name: true } },
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      return await this.prisma.products.findUnique({
        include: {
          suppliier: { select: { supplier_name: true } },
          operator: { select: { name: true } },
          type: { select: { type_name: true } },
        },
        where: { product_id: id },
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateInventoryDto: UpdateInventoryDto) {
    console.log(updateInventoryDto);
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.products.update({
          where: { product_id: id },
          data: updateInventoryDto,
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
        return await transaction.products.delete({
          where: { product_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
