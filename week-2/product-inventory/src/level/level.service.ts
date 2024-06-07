import { Injectable } from '@nestjs/common';
import { CreateLevelDto } from './dto/create-level.dto';
import { UpdateLevelDto } from './dto/update-level.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class LevelService {
  prisma = new PrismaService();
  async create(createLevelDto: CreateLevelDto) {
    console.log(createLevelDto);
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.level.create({ data: createLevelDto });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  findAll() {
    return this.prisma.level.findMany();
  }

  async findOne(id: number) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        transaction.level.findUnique({
          where: { level_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateLevelDto: UpdateLevelDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.level.update({
          where: { level_id: id },
          data: updateLevelDto,
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
        return await transaction.level.delete({
          where: { level_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
