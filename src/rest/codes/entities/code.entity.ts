import { Column, PrimaryColumn } from "typeorm";

export class Code {
    @PrimaryColumn()
    codeKind:string

    @PrimaryColumn()
    key:string

    @Column()
    name:string
}
