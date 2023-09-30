import { Injectable } from '@nestjs/common';
import { CreateDeckCodeDto } from './dto/create-deck-code.dto';
import { UpdateDeckCodeDto } from './dto/update-deck-code.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { DeckCode } from './entities/deck-code.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DeckCodesService {
  constructor(@InjectRepository(DeckCode) readonly deckCodeRepository: Repository<DeckCode>){}

  create(createDeckCodeDto: CreateDeckCodeDto[]) {
    // for(var i in createDeckCodeDto) {
    //   this.deckCodeRepository.save(createDeckCodeDto[i]);
    // }
    this.deckCodeRepository.save(createDeckCodeDto);
  }

  findAll() {
    return `This action returns all deckCodes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deckCode`;
  }

  update(id: number, updateDeckCodeDto: UpdateDeckCodeDto) {
    return `This action updates a #${id} deckCode`;
  }

  remove(id: number) {
    return `This action removes a #${id} deckCode`;
  }
}
