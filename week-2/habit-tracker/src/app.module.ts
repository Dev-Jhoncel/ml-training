import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { GoalsModule } from './goals/goals.module';
import { TrackerModule } from './tracker/tracker.module';
import { RepetitionModule } from './repetition/repetition.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [PrismaModule, GoalsModule, TrackerModule, RepetitionModule, UserModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
