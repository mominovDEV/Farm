import { Test, TestingModule } from '@nestjs/testing';
import { FeddingController } from './fedding.controller';
import { FeddingService } from './fedding.service';

describe('FeddingController', () => {
  let controller: FeddingController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FeddingController],
      providers: [FeddingService],
    }).compile();

    controller = module.get<FeddingController>(FeddingController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
