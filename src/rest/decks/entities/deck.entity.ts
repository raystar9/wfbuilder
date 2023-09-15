import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Deck {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({length:6})
    m1:string;

    @Column({length:6})
    m2:string;

    @Column({length:6})
    m3:string;

    @Column({length:6})
    u1:string;

    @Column({length:6})
    u2:string;

    @Column({length:6})
    u3:string;

    @Column({length:6})
    e1:string;

    @Column({length:6})
    e2:string;

    @Column({length:6})
    e3:string;

    @Column({length:6})
    s1:string;

    @Column({length:6})
    s2:string;

    @Column({length:6})
    s3:string;

    @Column({length:6})
    deckCode:string;
}
