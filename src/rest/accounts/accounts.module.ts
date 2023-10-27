import { Module } from '@nestjs/common';
import { AccountsService } from './accounts.service';
import { AccountsController } from './accounts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { MyDecks } from './dto/my-decks.dto';
import { RefDecks } from './dto/ref-decks.entity';
import { CharacterPool } from './dto/character-pool.dto';
import { SessionsService } from '../sessions/sessions.service';
import { Session } from '../sessions/entities/session.entity';
import { EncryptService } from 'src/service/encrypt/encrypt.service';

@Module({
  imports: [TypeOrmModule.forFeature([Account, MyDecks, RefDecks, CharacterPool, Session])],
  controllers: [AccountsController],
  providers: [AccountsService, SessionsService, EncryptService],
})
export class AccountsModule {}
