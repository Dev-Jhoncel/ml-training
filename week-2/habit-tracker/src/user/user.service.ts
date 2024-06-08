import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  create(createUserDto: CreateUserDto) {
    try {
      this.prisma.$transaction(async (transaction) => {
        return transaction.user.create({ data: createUserDto });
      });
    } catch (error) {
      return error.message;
    }
  }

  findAll() {
    return this.prisma.user.findMany();
  }

  findOne(id: number) {
    return this.prisma.user.findUnique({ where: { user_id: id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.user.update({
          where: { user_id: id },
          data: updateUserDto,
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
        return await transaction.user.delete({
          where: { user_id: id },
        });
      });
    } catch (error) {
      return error.message;
    }
  }
}
