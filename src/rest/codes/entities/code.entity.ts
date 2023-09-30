import {
  Column,
  Entity,
  ManyToMany,
  PrimaryColumn,
} from 'typeorm';
import { Deck } from 'src/rest/decks/entities/deck.entity';

@Entity('code')
export class Code {
  @PrimaryColumn()
  codeKind: string;

  @PrimaryColumn()
  key: string;

  @Column({nullable:true})
  relKey: string;

  @Column({ charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', })
  name: string;
}
