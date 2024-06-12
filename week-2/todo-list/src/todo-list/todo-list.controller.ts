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
  Version,
} from '@nestjs/common';
import { TodoListService } from './todo-list.service';
import { CreateTodoListDto } from './dto/create-todo-list.dto';
import { UpdateTodoListDto } from './dto/update-todo-list.dto';
import getCustomMessage from 'src/utils/CustomMessage';

interface CustomResponse {
  code: number;
  message: string;
  data?: any;
}

@Controller('todo')
export class TodoListController {
  constructor(private readonly todoListService: TodoListService) {}

  @Post()
  @Version('1')
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createTodoListDto: CreateTodoListDto,
  ): Promise<CustomResponse> {
    try {
      const resp = await this.todoListService.create(createTodoListDto);
      return getCustomMessage.customMessage(HttpStatus.OK, resp);
    } catch (error) {
      const errorMessage = getCustomMessage.customMessage(
        HttpStatus.INTERNAL_SERVER_ERROR,
        error.message,
      );
      throw new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get()
  @Version('1')
  async findAll(): Promise<CustomResponse> {
    try {
      const resp = await this.todoListService.findAll();
      if (resp.length === 0) throw new Error(`${HttpStatus.NOT_FOUND}`);
      return getCustomMessage.customMessage(HttpStatus.OK, resp);
    } catch (error) {
      const errorCode =
        error.message === '404'
          ? HttpStatus.NOT_FOUND
          : HttpStatus.INTERNAL_SERVER_ERROR;
      const errorMessage = getCustomMessage.customMessage(
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
  @Version('1')
  async findOne(@Param('id') id: string): Promise<CustomResponse> {
    try {
      const resp = await this.todoListService.findOne(+id);
      if (resp === null) throw new Error(`${HttpStatus.NOT_FOUND}`);
      return getCustomMessage.customMessage(HttpStatus.OK, resp);
    } catch (error) {
      const errorCode =
        error.message === '404'
          ? HttpStatus.NOT_FOUND
          : HttpStatus.INTERNAL_SERVER_ERROR;
      const errorMessage = getCustomMessage.customMessage(
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
  @Version('1')
  async update(
    @Param('id') id: string,
    @Body() updateTodoListDto: UpdateTodoListDto,
  ): Promise<CustomResponse> {
    try {
      const resp = await this.todoListService.update(+id, updateTodoListDto);
      if (resp === null) throw new Error(`${HttpStatus.NOT_FOUND}`);
      return getCustomMessage.customMessage(HttpStatus.OK, resp);
    } catch (error) {
      const errorCode =
        error.message === '404'
          ? HttpStatus.NOT_FOUND
          : HttpStatus.INTERNAL_SERVER_ERROR;
      const errorMessage = getCustomMessage.customMessage(
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
  @Version('1')
  async remove(@Param('id') id: string): Promise<CustomResponse> {
    try {
      const resp = await this.todoListService.remove(+id);
      if (resp === null) throw new Error(`${HttpStatus.NOT_FOUND}`);
      return getCustomMessage.customMessage(HttpStatus.OK, resp);
    } catch (error) {
      const errorCode =
        error.message === '404'
          ? HttpStatus.NOT_FOUND
          : HttpStatus.INTERNAL_SERVER_ERROR;
      const errorMessage = getCustomMessage.customMessage(
        errorCode,
        error.message,
      );
      if (errorCode === 404) {
        throw new HttpException(errorMessage, HttpStatus.NOT_FOUND);
      }
      throw new HttpException(errorMessage, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
