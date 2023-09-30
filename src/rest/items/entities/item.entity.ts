import { Column, PrimaryColumn } from 'typeorm';

export class Item {
  @PrimaryColumn({ length: 6 })
  id: string;

  @Column({ length: 30 })
  name: string;

  @Column({ length: 1 })
  type: string;
}
