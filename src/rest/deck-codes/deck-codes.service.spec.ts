import { Test, TestingModule } from '@nestjs/testing';
import { DeckCodesService } from './deck-codes.service';

describe('DeckCodesService', () => {
  let service: DeckCodesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DeckCodesService],
    }).compile();

    service = module.get<DeckCodesService>(DeckCodesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
