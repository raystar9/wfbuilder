import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Character {
  @PrimaryColumn({ length: 6 })
  id: string;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 1 })
  type: string;

  @Column({ length: 1 })
  pfType: string;

  @Column({ length:1 })
  stars: string;

  @Column({nullable:true}) 
  releaseDate: Date;
}
