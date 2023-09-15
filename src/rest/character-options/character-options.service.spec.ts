import { Test, TestingModule } from '@nestjs/testing';
import { CharacterOptionsService } from './character-options.service';

describe('CharacterOptionsService', () => {
  let service: CharacterOptionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CharacterOptionsService],
    }).compile();

    service = module.get<CharacterOptionsService>(CharacterOptionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
