import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoListModule } from './todo-list/todo-list.module';
import { TodoListController } from './todo-list/todo-list.controller';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [TodoListModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes(TodoListController);
  }
}
