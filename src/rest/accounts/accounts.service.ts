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

  async validate(id:string, password:string) {
    const res = await this.accountRepository.findOneBy({id, password});
    if(res) {
      return v4();
    } else {
      return null;
    }
  }

  update(id: number, updateAccountDto: UpdateAccountDto) {
    return `This action updates a #${id} account`;
  }

  remove(id: number) {
    return `This action removes a #${id} account`;
  }
}
