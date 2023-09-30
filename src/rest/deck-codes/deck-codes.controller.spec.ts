import { Test, TestingModule } from '@nestjs/testing';
import { DeckCodesController } from './deck-codes.controller';
import { DeckCodesService } from './deck-codes.service';

describe('DeckCodesController', () => {
  let controller: DeckCodesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DeckCodesController],
      providers: [DeckCodesService],
    }).compile();

    controller = module.get<DeckCodesController>(DeckCodesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
