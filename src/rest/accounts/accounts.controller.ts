import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { UpdateAccountDto } from './dto/update-account.dto';

@Controller('rest/accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) {}

  @Post()
  create(@Body() createAccountDto: CreateAccountDto) {
    return this.accountsService.create(createAccountDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Query() param:{password:string}) {
    return this.accountsService.validate(id, param.password);
  }

  @Get(':id/decks')
  findDecks(@Param('id') id: string, @Query() param:{page:number}) {
    return this.accountsService.findMyDecks(id, param.page);
  }

  @Get(':id/ref-decks')
  findRefDecks(@Param('id') id: string, @Query() param:{refId?:string, page:number}) {
    return this.accountsService.findRefDecks(id, param.refId, param.page);
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
