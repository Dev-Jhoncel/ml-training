import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InterlibraryLoanService } from './interlibrary_loan.service';
import { CreateInterlibraryLoanDto } from './dto/create-interlibrary_loan.dto';
import { UpdateInterlibraryLoanDto } from './dto/update-interlibrary_loan.dto';

@Controller('interlibrary-loan')
export class InterlibraryLoanController {
  constructor(private readonly interlibraryLoanService: InterlibraryLoanService) {}

  @Post()
  create(@Body() createInterlibraryLoanDto: CreateInterlibraryLoanDto) {
    return this.interlibraryLoanService.create(createInterlibraryLoanDto);
  }

  @Get()
  findAll() {
    return this.interlibraryLoanService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interlibraryLoanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateInterlibraryLoanDto: UpdateInterlibraryLoanDto) {
    return this.interlibraryLoanService.update(+id, updateInterlibraryLoanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interlibraryLoanService.remove(+id);
  }
}
