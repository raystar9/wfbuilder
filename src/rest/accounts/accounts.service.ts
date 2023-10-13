import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {v4} from 'uuid';
@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {
    accountRepository.create();
  }

  create(createAccountDto: CreateAccountDto) {
    this.accountRepository.save(createAccountDto);
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }

  async validate(id:string, password:string) {
    const res = await this.accountRepository.findOneBy({id, password});
    if(res) {
      return v4();
    } else {
      return null;
    }
  }

  async findMyDecks(id:string, page:number) {
    return await this.accountRepository.createQueryBuilder("account")
      .leftJoinAndSelect("account.decks", "deck")
      .select("account.id")
      .addSelect("deck.id")
      .addSelect("deck.m1")
      .addSelect("deck.m2")
      .addSelect("deck.m3")
      .where("account.id = :id", {id});
  }

  async findRefDecks(id:string, refId:string, page:number) {
    return await this.accountRepository.createQueryBuilder("account")
      .leftJoinAndSelect("account.decks", "deck")
      .select("account.id")
      .addSelect("deck.id")
      .addSelect("deck.m1")
      .addSelect("deck.m2")
      .addSelect("deck.m3")
      .where("account.id = :id", {id})
      .andWhere("deck.refAccountId IS NOT NULL")
  }
}
