import { Injectable } from '@nestjs/common';
import { CreateDeckDto } from './dto/create-deck.dto';
import { UpdateDeckDto } from './dto/update-deck.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { Deck } from './entities/deck.entity';
import { DeckCodesService } from '../deck-codes/deck-codes.service';
import { DeckCode } from '../deck-codes/entities/deck-code.entity';
import { SelectAllDeckDto } from './dto/select-all-deck.dto';

@Injectable()
export class DecksService {
  constructor(
    @InjectRepository(Deck) private readonly deckRepository: Repository<Deck>,
    @InjectRepository(DeckCode) private readonly deckCodeRepository: Repository<DeckCode>,
  ) {
    deckRepository.create();
  }

  async create(createDeckDto: CreateDeckDto) {
    const result = await this.deckRepository.save(createDeckDto.deck);
    for(var i in createDeckDto.codes) {
      this.deckCodeRepository.save({...createDeckDto.codes[i], deckId:result.id });
    }
    return 'This action adds a new deck';
  }

  async findAll(selectAllDeckDto:SelectAllDeckDto) {
    const take = 20;
    const skip = selectAllDeckDto.page? (+selectAllDeckDto.page - 1) * take: 0
    console.log(selectAllDeckDto)
    const queryBuilder = this.deckRepository.createQueryBuilder("deck");
    const codeKindList = [];
    const codeKeyList = [];
    if(selectAllDeckDto.largeCategory) {
      codeKindList.push("01")
      codeKeyList.push(selectAllDeckDto.largeCategory)
      if(selectAllDeckDto.mediumCategory) {
        codeKindList.push("02")
        codeKeyList.push(selectAllDeckDto.mediumCategory)
        queryBuilder.where("code.codeKind = :lc AND code.key = :key", {lc:"01", key:selectAllDeckDto.largeCategory});
        if(selectAllDeckDto.smallCategory) {
          codeKindList.push("03")
          codeKeyList.push(selectAllDeckDto.smallCategory)
          queryBuilder.where("code.codeKind = :lc AND code.key = :key", {lc:"01", key:selectAllDeckDto.largeCategory});
        }
      }
    }
    
    if(codeKeyList.length) {
      queryBuilder.where("code.codeKind IN (:...kind) AND code.key IN (:...key)", {kind:codeKindList, key:codeKeyList});
      queryBuilder.having("count(*) = :count", {count: codeKeyList.length})
      queryBuilder.groupBy("deck.id");
    }

    queryBuilder.leftJoinAndSelect("deck.codes", "code");
    const res = await queryBuilder.getMany()
    const ids:number[] = [];
    for(let i in res) {
      ids.push(res[i].id)
    }
    if(ids.length) {
      return this.deckRepository.find({
        where:[{id: In([...ids])}],
        take,
        skip
      })
      // const queryBuilder2 = this.deckRepository.createQueryBuilder("deck");
      // queryBuilder.leftJoinAndSelect("deck.codes", "code","code.codeKind IN('01', '02', '03')");
      // return queryBuilder2.where("deck.id in(:...ids)", {ids}).getMany();
    } else {
      return [];
    }
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
