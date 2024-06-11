import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import CustomerMessage from 'src/utils/CustomMessage';

interface CustomResponse {
  code: number;
  message: string;
  data?: any;
}

@Controller('api/v1/todo')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  customResponse = new CustomerMessage();

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createTodoListDto: CreateTodoListDto,
  ): Promise<CustomResponse> {
    try {
      const resp = await this.todoListService.create(createTodoListDto);
      return this.customResponse.customMessage(HttpStatus.OK, resp);
    } catch (error) {
      const errorMessage = this.customResponse.customMessage(
        HttpStatus.INTERNAL_SERVER_ERROR,
        error.message,
      );
      throw new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  async findAll(): Promise<CustomResponse> {
    try {
      const resp = await this.todoListService.findAll();
      if (resp.length === 0) throw new Error(`${HttpStatus.NOT_FOUND}`);
      return this.customResponse.customMessage(HttpStatus.OK, resp);
    } catch (error) {
      const errorCode =
        error.message === '404'
          ? HttpStatus.NOT_FOUND
          : HttpStatus.INTERNAL_SERVER_ERROR;
      const errorMessage = this.customResponse.customMessage(
        errorCode,
        error.message,
      );
      if (errorCode === 404) {
        throw new HttpException(errorMessage, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CustomResponse> {
    try {
      const resp = await this.todoListService.findOne(+id);
      if (resp === null) throw new Error(`${HttpStatus.NOT_FOUND}`);
      return this.customResponse.customMessage(HttpStatus.OK, resp);
    } catch (error) {
      const errorCode =
        error.message === '404'
          ? HttpStatus.NOT_FOUND
          : HttpStatus.INTERNAL_SERVER_ERROR;
      const errorMessage = this.customResponse.customMessage(
        errorCode,
        error.message,
      );
      if (errorCode === 404) {
        throw new HttpException(errorMessage, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTodoListDto: UpdateTodoListDto,
  ): Promise<CustomResponse> {
    try {
      const resp = await this.todoListService.update(+id, updateTodoListDto);
      if (resp === null) throw new Error(`${HttpStatus.NOT_FOUND}`);
      return this.customResponse.customMessage(HttpStatus.OK, resp);
    } catch (error) {
      const errorCode =
        error.message === '404'
          ? HttpStatus.NOT_FOUND
          : HttpStatus.INTERNAL_SERVER_ERROR;
      const errorMessage = this.customResponse.customMessage(
        errorCode,
        error.message,
      );
      if (errorCode === 404) {
        throw new HttpException(errorMessage, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoListService.remove(+id);
  }
}
