import { PartialType } from '@nestjs/mapped-types';
import { CreateInterlibraryLoanDto } from './create-interlibrary_loan.dto';

export class UpdateInterlibraryLoanDto extends PartialType(
  CreateInterlibraryLoanDto,
) {}
