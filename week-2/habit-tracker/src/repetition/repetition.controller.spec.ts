import { Test, TestingModule } from '@nestjs/testing';
import { RepetitionController } from './repetition.controller';
import { RepetitionService } from './repetition.service';

describe('RepetitionController', () => {
  let controller: RepetitionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RepetitionController],
      providers: [RepetitionService],
    }).compile();

    controller = module.get<RepetitionController>(RepetitionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
