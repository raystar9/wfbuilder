import { Column, PrimaryColumn } from "typeorm";

export class Character {
    @PrimaryColumn({length:6})
    id:string;

    @Column({length:30})
    name:string;

    @Column({length:1})
    type:number;

    @Column({length:1})
    pfType:number;
}
