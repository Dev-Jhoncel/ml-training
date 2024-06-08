import { Injectable } from '@nestjs/common';
import { CreateRepetitionDto } from './dto/create-repetition.dto';
import { UpdateRepetitionDto } from './dto/update-repetition.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RepetitionService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createRepetitionDto: CreateRepetitionDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.repetition.create({ data: createRepetitionDto });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  findAll() {
    return this.prisma.repetition.findMany();
  }

  findOne(id: number) {
    return this.prisma.repetition.findUnique({ where: { repeat_id: id } });
  }

  async update(id: number, updateRepetitionDto: UpdateRepetitionDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.repetition.update({
          where: { repeat_id: id },
          data: updateRepetitionDto,
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
        return await transaction.repetition.delete({
          where: { repeat_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
