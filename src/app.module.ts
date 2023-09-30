import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CodesModule } from './rest/codes/codes.module';
import { CharactersModule } from './rest/characters/characters.module';
import { DecksModule } from './rest/decks/decks.module';
import { ItemsModule } from './rest/items/items.module';
import { CharacterOptionsModule } from './rest/character-options/character-options.module';
import { ItemOptionsModule } from './rest/item-options/item-options.module';
import { Item } from './rest/items/entities/item.entity';
import { ItemOption } from './rest/item-options/entities/item-option.entity';
import { Character } from './rest/characters/entities/character.entity';
import { CharacterOption } from './rest/character-options/entities/character-option.entity';
import { Code } from './rest/codes/entities/code.entity';
import { Deck } from './rest/decks/entities/deck.entity';
import { DeckCodesModule } from './rest/deck-codes/deck-codes.module';
import { DeckCode } from './rest/deck-codes/entities/deck-code.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      host: 'database-2.cerscfse83w3.ap-northeast-2.rds.amazonaws.com',
      port: 7492,
      username: 'WF_USER',
      password: '123',
      type: 'mysql',
      database: 'WF',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      entities: [
        Item,
        ItemOption,
        Character,
        CharacterOption,
        Code,
        Deck,
        DeckCode,
      ],
      //dropSchema: true,
      charset:"utf8",
    }),
    CodesModule,
    CharactersModule,
    DecksModule,
    ItemsModule,
    CharacterOptionsModule,
    ItemOptionsModule,
    DeckCodesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
