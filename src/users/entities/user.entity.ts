import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity()
export class User {
  @PrimaryColumn()
  phoneNumber: string

  @Column({ nullable: true })
  name?: string

  @Column({ default: 0 })
  confirmedEnrollmentsCount: number

  @Column({ default: 0 })
  cancelledEnrollmentsCount: number

  @CreateDateColumn()
  createdAt: Date
}
