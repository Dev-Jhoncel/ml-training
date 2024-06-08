import { Test, TestingModule } from '@nestjs/testing';
import { InterlibraryLoanService } from './interlibrary_loan.service';

describe('InterlibraryLoanService', () => {
  let service: InterlibraryLoanService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InterlibraryLoanService],
    }).compile();

    service = module.get<InterlibraryLoanService>(InterlibraryLoanService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
