import { Test, TestingModule } from '@nestjs/testing';
import { FeddingService } from './fedding.service';

describe('FeddingService', () => {
  let service: FeddingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FeddingService],
    }).compile();

    service = module.get<FeddingService>(FeddingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
