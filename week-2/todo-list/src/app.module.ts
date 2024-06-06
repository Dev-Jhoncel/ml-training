import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoListModule } from './todo-list/todo-list.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TodoListModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
