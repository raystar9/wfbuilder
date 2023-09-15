import { Test, TestingModule } from '@nestjs/testing';
import { ItemOptionsController } from './item-options.controller';
import { ItemOptionsService } from './item-options.service';

describe('ItemOptionsController', () => {
  let controller: ItemOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ItemOptionsController],
      providers: [ItemOptionsService],
    }).compile();

    controller = module.get<ItemOptionsController>(ItemOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
