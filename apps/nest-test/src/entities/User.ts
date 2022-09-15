import {Column, Entity, Index, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Index()
  @Column()
  email: string

  @Column()
  password: string

  @Column({nullable: true})
  name?: string
}
