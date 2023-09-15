import { Module } from '@nestjs/common';
import { CharacterOptionsService } from './character-options.service';
import { CharacterOptionsController } from './character-options.controller';
import { CharacterOption } from './entities/character-option.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CharacterOption])],
  controllers: [CharacterOptionsController],
  providers: [CharacterOptionsService],
})
export class CharacterOptionsModule {}
