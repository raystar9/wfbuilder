import { Character } from "src/rest/characters/entities/character.entity"
import { Deck } from "src/rest/decks/entities/deck.entity"
import { Column, JoinTable, ManyToMany, OneToMany, PrimaryColumn } from "typeorm"

export class Account {
    @PrimaryColumn()
    id:string
    @Column()
    password:string
    @Column()
    nickName:string

    @ManyToMany(() => Character)
    @JoinTable({
        name:"character_pool",
        joinColumn:{name:"accountId", referencedColumnName:"id"},
        inverseJoinColumn:{name:"characterId", referencedColumnName:"id"}
    })
    characters:Character[]

    @OneToMany(() => Deck, deck => deck.id)
    decks:Deck[]
    // @ManyToMany(() => Deck)
    // @JoinTable({
    //     name:"account_deck",
    //     joinColumn:{name:"accountId", referencedColumnName:"id"},
    //     inverseJoinColumn:{name:"deckId", referencedColumnName:"id"}
    // })
    // decks:Deck[]

    // @ManyToMany(() => Deck)
    // @JoinTable({
    //     name:"account_deck_request",
    //     joinColumns:[{name:"accountId", referencedColumnName:"id"}, {name:"refAccountId", referencedColumnName:"id"}],
    //     inverseJoinColumns:[{name:"deckId", referencedColumnName:"id"}]
    // })
    // requestDecks:Deck[]
}
