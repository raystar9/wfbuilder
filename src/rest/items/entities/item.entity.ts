import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryColumn({ length: 7 })
  id: string;

  @Column({ length: 1 })
  type: string;

  @Column({ length:1 })
  stars: string;

  @Column({ length: 50,  charset: 'utf8mb4', collation: 'utf8mb4_unicode_ci', })
  name: string;

  @Column() 
  releaseDate: Date;

  @Column({length:1})
  playable: string;
}
