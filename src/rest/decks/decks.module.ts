import { Module } from '@nestjs/common';
import { DecksService } from './decks.service';
import { DecksController } from './decks.controller';
import { Deck } from './entities/deck.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Deck])],
  controllers: [DecksController],
  providers: [DecksService],
})
export class DecksModule {}
