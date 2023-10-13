import { Character } from "src/rest/characters/entities/character.entity"
import { Deck } from "src/rest/decks/entities/deck.entity"
import { Session } from "src/rest/sessions/entities/session.entity"
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryColumn } from "typeorm"

@Entity('account')
export class Account {
    @PrimaryColumn({length:36})
    id:string
    @Column({length:36})
    password:string
    @Column({length:36})
    nickName:string
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
