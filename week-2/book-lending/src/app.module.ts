import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { InterlibraryLoanModule } from './interlibrary_loan/interlibrary_loan.module';
import { BookModule } from './book/book.module';
import { BorrowerModule } from './borrower/borrower.module';

@Module({
  imports: [PrismaModule, InterlibraryLoanModule, BookModule, BorrowerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
