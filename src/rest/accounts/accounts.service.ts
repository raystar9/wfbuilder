import { Injectable } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { Account } from './entities/account.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { v4 } from 'uuid';
import { EncryptService } from 'src/service/encrypt/encrypt.service';
@Injectable()
export class AccountsService {
  constructor(
    @InjectRepository(Account)
    private readonly accountRepository: Repository<Account>,
    private readonly encryptService: EncryptService,
  ) {
    accountRepository.create();
  }

  //encryptService: EncryptService

  create(createAccountDto: CreateAccountDto) {
    createAccountDto.password = this.encryptService.encrypt(createAccountDto.password)
    this.accountRepository.save(createAccountDto);
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
  
  async validate(id:string, password:string) {
    const encryptedPassword = this.encryptService.encrypt(password);
    const res = await this.accountRepository.findOneBy({id, password:encryptedPassword});
    if(res) {
      return v4();
    } else {
      return null;
    }
  }

  async findMyDecks(id:string, page:number) {
    return await this.accountRepository.createQueryBuilder("account")
      .leftJoinAndSelect("account.decks", "decks")
      .select("account.id")
      .addSelect("decks.id")
      .addSelect("decks.m1")
      .addSelect("decks.m2")
      .addSelect("decks.m3")
      .where("account.id = :id", {id}).getMany();
  }

  async findRefDecks(id:string, refId:string, page:number) {
    const queryBuilder = this.accountRepository.createQueryBuilder("account")
      .leftJoinAndSelect("account.decks", "decks")
      .select("account.id")
      .addSelect("decks.id")
      .addSelect("decks.m1")
      .addSelect("decks.m2")
      .addSelect("decks.m3")
      .where("account.id = :id", {id})
      if(refId) {
        queryBuilder.andWhere("decks.refAccountId = :refId", {refId});
      } else {
        queryBuilder.andWhere("decks.refAccountId IS NOT NULL");
      }
      return await queryBuilder.getMany();
  }

  async findCharacterPool(id:string) {
    return await this.accountRepository.createQueryBuilder("account")
      .leftJoinAndSelect("account.characters", "characters")
      .select("account.id")
      .addSelect("characters.id")
      .where("account.id = :id", {id}).getOne()
  }
}
