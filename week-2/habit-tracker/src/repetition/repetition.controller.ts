import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RepetitionService } from './repetition.service';
import { CreateRepetitionDto } from './dto/create-repetition.dto';
import { UpdateRepetitionDto } from './dto/update-repetition.dto';

@Controller('repetition')
export class RepetitionController {
  constructor(private readonly repetitionService: RepetitionService) {}

  @Post()
  create(@Body() createRepetitionDto: CreateRepetitionDto) {
    return this.repetitionService.create(createRepetitionDto);
  }

  @Get()
  findAll() {
    return this.repetitionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.repetitionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRepetitionDto: UpdateRepetitionDto) {
    return this.repetitionService.update(+id, updateRepetitionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.repetitionService.remove(+id);
  }
}
