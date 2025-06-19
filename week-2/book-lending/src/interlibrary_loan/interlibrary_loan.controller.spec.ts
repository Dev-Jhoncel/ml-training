import { Test, TestingModule } from '@nestjs/testing';
import { InterlibraryLoanController } from './interlibrary_loan.controller';
import { InterlibraryLoanService } from './interlibrary_loan.service';

describe('InterlibraryLoanController', () => {
  let controller: InterlibraryLoanController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterlibraryLoanController],
      providers: [InterlibraryLoanService],
    }).compile();

    controller = module.get<InterlibraryLoanController>(InterlibraryLoanController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
