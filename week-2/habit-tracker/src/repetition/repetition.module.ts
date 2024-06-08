import { Module } from '@nestjs/common';
import { RepetitionService } from './repetition.service';
import { RepetitionController } from './repetition.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RepetitionController],
  providers: [RepetitionService],
})
export class RepetitionModule {}
