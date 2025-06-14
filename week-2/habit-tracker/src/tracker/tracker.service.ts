import { Injectable } from '@nestjs/common';
import { CreateTrackerDto } from './dto/create-tracker.dto';
import { UpdateTrackerDto } from './dto/update-tracker.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TrackerService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createTrackerDto: CreateTrackerDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.tracker.create({ data: createTrackerDto });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  findAll() {
    return this.prisma.tracker.findMany();
  }

  findOne(id: number) {
    return this.prisma.tracker.findUnique({ where: { track_id: id } });
  }

  async update(id: number, updateTrackerDto: UpdateTrackerDto) {
    console.log(updateTrackerDto);
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.tracker.update({
          where: { track_id: id },
          data: updateTrackerDto,
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
        return await transaction.tracker.delete({
          where: { track_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
