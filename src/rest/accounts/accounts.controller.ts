import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';
import { SessionsService } from '../sessions/sessions.service';

@Controller('rest/accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService, private readonly sessionsService:SessionsService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get(':id')
  async login(@Param('id') id: string, @Query() param:{password:string}) {
    const sessionKey = await this.accountsService.validate(id, param.password);
    if(sessionKey) {
      this.sessionsService.setSession(id, sessionKey);
      return sessionKey;
    }
  }

  @Get(':id/decks')
  findDecks(@Param('id') id: string, @Query() param:{page:number}) {
    return this.accountsService.findMyDecks(id, param.page);
  }

  @Get(':id/ref-decks')
  findRefDecks(@Param('id') id: string, @Query() param:{refId?:string, page:number}) {
    return this.accountsService.findRefDecks(id, param.refId, param.page);
  }

  @Get(':id/character-pool')
  findCharacterPool(@Param('id') id: string) {
    return this.accountsService.findCharacterPool(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccountDto: UpdateAccountDto) {
    return this.accountsService.update(+id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountsService.remove(+id);
  }
}
