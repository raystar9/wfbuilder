import { Module } from '@nestjs/common';
import { DecksService } from './decks.service';
import { DecksController } from './decks.controller';
import { Deck } from './entities/deck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DeckCode } from '../deck-codes/entities/deck-code.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Deck]), TypeOrmModule.forFeature([DeckCode]), ],
  controllers: [DecksController],
  providers: [DecksService],
})
export class DecksModule {}
