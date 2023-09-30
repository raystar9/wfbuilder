import { Code } from "src/rest/codes/entities/code.entity";
import { Deck } from "src/rest/decks/entities/deck.entity";
import { Entity, ManyToOne, PrimaryColumn } from "typeorm";

@Entity("deck_code")
export class DeckCode {
  @PrimaryColumn()
  deckId:number;
  
  @PrimaryColumn()
  codeKind:string;

  @PrimaryColumn()
  codeKey:string;
}
