import { Injectable } from '@nestjs/common';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Deck } from './entities/deck.entity';

@Injectable()
export class DecksService {
  constructor(
    @InjectRepository(Deck)
    private deckRepository: Repository<Deck>
  ){}

  create(createDeckDto: CreateDeckDto) {
    return 'This action adds a new deck';
  }

  findAll() {
    return `This action returns all decks`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deck`;
  }

  update(id: number, updateDeckDto: UpdateDeckDto) {
    return `This action updates a #${id} deck`;
  }

  remove(id: number) {
    return `This action removes a #${id} deck`;
  }
}
