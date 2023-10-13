import { Account } from "src/rest/accounts/entities/account.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Session {
    @PrimaryGeneratedColumn()
    id:number;

    @OneToOne(() => Account, )
    @JoinColumn({name:"accountId"})
    accountId:string

    @Column({length:36})
    sessionKey:string;
    
    @Column()
    lastReqDate: Date;
}
