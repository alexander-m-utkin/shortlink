import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity()
export class Link {
  @Exclude()
  @PrimaryGeneratedColumn('uuid')
  linkId: string;

  @Column({ unique: true })
  @Index()
  shortLink: string;

  @Column()
  link: string;

  fullShortLink?: string;
}
