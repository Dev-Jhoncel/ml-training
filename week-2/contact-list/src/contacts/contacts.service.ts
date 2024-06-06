import { Injectable } from '@nestjs/common';
import { CreateContactDto } from './dto/create-contact.dto';
import { UpdateContactDto } from './dto/update-contact.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createContactDto: CreateContactDto) {
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.contacts.create({ data: createContactDto });
      });
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      return await this.prisma.contacts.findMany();
    } catch (error) {
      return error.message;
    }
  }

  async findOne(query: string) {
    console.log(`Your in search Engine: ${query}`);
    return await this.prisma.contacts.findMany({
      where: {
        OR: [
          {
            mobile: {
              search: query,
            },
            firstname: {
              search: query,
            },
            lastname: {
              search: query,
            },
            middlename: {
              search: query,
            },
            email: {
              search: query,
            },
          },
        ],
      },
    });
  }

  async update(id: number, updateContactDto: UpdateContactDto) {
    updateContactDto.updatedAt = new Date();
    try {
      await this.prisma.$transaction(async (transaction) => {
        return await transaction.contacts.update({
          where: { id: id },
          data: updateContactDto,
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
        return await transaction.contacts.delete({
          where: { id: id },
        });
      });
    } catch (error) {
      console.log(`Delete contacts`);
      return error.message;
    }
  }
}
