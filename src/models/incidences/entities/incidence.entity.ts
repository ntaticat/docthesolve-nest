import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class IncidenceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({default: "No short description..."})
  shortDescription: string;

  @Column({default: "No long description..."})
  longDescription: string;
}