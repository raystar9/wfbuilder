// import { MyDecks } from 'src/rest/accounts/dto/my-decks.dto';
// import { RefDecks } from 'src/rest/accounts/dto/ref-decks.entity';
// import { Code } from 'src/rest/codes/entities/code.entity';
// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   JoinTable,
//   ManyToMany,
//   ManyToOne,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// @Entity()
// export class Deck {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column({ length: 30, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci' })
//   title: string;

//   @Column({ length: 6, nullable: true })
//   m1: string;

//   @Column({ length: 6, nullable: true })
//   m2: string;

//   @Column({ length: 6, nullable: true })
//   m3: string;

//   @Column({ length: 6, nullable: true })
//   u1: string;

//   @Column({ length: 6, nullable: true })
//   u2: string;

//   @Column({ length: 6, nullable: true })
//   u3: string;

//   @Column({ length: 7, nullable: true })
//   e1: string;

//   @Column({ length: 7, nullable: true })
//   e2: string;

//   @Column({ length: 7, nullable: true })
//   e3: string;

//   @Column({ length: 7, nullable: true })
//   s1: string;

//   @Column({ length: 7, nullable: true })
//   s2: string;

//   @Column({ length: 7, nullable: true })
//   s3: string;

//   @Column({ length: 6, nullable: true })
//   deckCode?: string;

//   @Column({ length: 200, nullable: true, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', })
//   comment?: string;

//   @CreateDateColumn()
//   regDate: Date;

//   @UpdateDateColumn()
//   lstModDate: Date;

//   @ManyToMany(() => Code)
//   @JoinTable({
//     name: "deck_code",
//     joinColumns: [{
//       name: "deckId",
//       referencedColumnName: "id"
//     }],
//     inverseJoinColumns: [{
//       name: "codeKind",
//       referencedColumnName: "codeKind"
//     }, {
//       name: "codeKey",
//       referencedColumnName: "key"
//     }],
//   })
//   codes?: Code[]

//   @ManyToOne(() => MyDecks)
//   account:MyDecks
  
//   @ManyToOne(() => RefDecks)
//   refAccount:RefDecks
// }
