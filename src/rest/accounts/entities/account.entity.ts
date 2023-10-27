import { Character } from "src/rest/characters/entities/character.entity"
import { Deck } from "src/rest/decks/entities/deck.entity"
import { Session } from "src/rest/sessions/entities/session.entity"
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn } from "typeorm"

@Entity('account')
export class Account {
    @PrimaryColumn({length:36})
    id:string
    @Column({length:64})
    password:string
    @Column({length:12, charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci'})
    nickName:string
    @Column({length:320, nullable:true})
    email:string
    @ManyToMany(() => Character)
    @JoinTable({
        name:"character_pool",
        joinColumn:{name:"accountId", referencedColumnName:"id"},
        inverseJoinColumn:{name:"characterId", referencedColumnName:"id"}
    })
    characters:Character[]

    @OneToMany(() => Deck, deck => deck.account)
    decks:Deck[]

    @OneToMany(() => Deck, deck => deck.refAccount)
    refDecks:Deck[]

    // @OneToOne(() => Session)
    // session:Session;
}
