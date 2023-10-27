import { Account } from "src/rest/accounts/entities/account.entity";
import { Column, Entity, Index, JoinColumn, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, RelationId } from "typeorm";

@Entity()
export class Session {
    @PrimaryColumn({length:36})
    @RelationId((session:Session) => session.account)
    id:string;

    @OneToOne(() => Account,)
    @JoinColumn({name:"id"})
    account:Account

    @Column({length:36})
    sessionKey:string;
    
    @Column()
    lastReqDate: Date;
}
