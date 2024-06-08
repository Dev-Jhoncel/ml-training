import { Injectable } from '@nestjs/common';
import { CreateGoalDto } from './dto/create-goal.dto';
import { UpdateGoalDto } from './dto/update-goal.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class GoalsService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createGoalDto: CreateGoalDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return transaction.goals.create({ data: createGoalDto });
      });
    } catch (error) {
      console.log(error.message);
      return error.message;
    }
  }

  findAll() {
    try {
      return this.prisma.goals.findMany({
        include: {
          tracker: { select: { check_in: true, check_out: true } },
          user: { select: { user_id: true, full_name: true, email: true } },
          rate_goals: { select: { goals_rating: true } },
          repetition: { select: { action: true } },
        },
      });
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: number) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        transaction.goals.findUnique({
          where: { goal_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }

  async update(id: number, updateGoalDto: UpdateGoalDto) {
    updateGoalDto.updatedAt = new Date();
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.goals.update({
          where: { goal_id: id },
          data: updateGoalDto,
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
        return await transaction.goals.delete({
          where: { goal_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
