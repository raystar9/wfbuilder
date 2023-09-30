import { Module } from '@nestjs/common';
import { DeckCodesService } from './deck-codes.service';
import { DeckCodesController } from './deck-codes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeckCode } from './entities/deck-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DeckCode])],
  controllers: [DeckCodesController],
  providers: [DeckCodesService],
})
export class DeckCodesModule {}
