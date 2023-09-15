import { Test, TestingModule } from '@nestjs/testing';
import { CharacterOptionsController } from './character-options.controller';
import { CharacterOptionsService } from './character-options.service';

describe('CharacterOptionsController', () => {
  let controller: CharacterOptionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CharacterOptionsController],
      providers: [CharacterOptionsService],
    }).compile();

    controller = module.get<CharacterOptionsController>(CharacterOptionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
