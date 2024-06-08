import { Module } from '@nestjs/common';
import { InterlibraryLoanService } from './interlibrary_loan.service';
import { InterlibraryLoanController } from './interlibrary_loan.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [InterlibraryLoanController],
  providers: [InterlibraryLoanService],
})
export class InterlibraryLoanModule {}
