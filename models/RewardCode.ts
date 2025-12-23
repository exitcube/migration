import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
import { Reward } from "./Reward";
import { User } from "./User";

@Entity("rewardCode")
export class RewardCode {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rewardId: number;

  @ManyToOne(() => Reward, { onDelete: "CASCADE" })
  @JoinColumn({ name: "rewardId" })
  reward: Reward;

  @Column({ nullable: false })
  code: string;

  @Column({ nullable: false })
  status: string;

  @Column({ nullable: true })
  usedByUserId: number;

  @ManyToOne(() => User, { onDelete: "SET NULL" })
  @JoinColumn({ name: "usedByUserId" })
  usedByUser: User;

  @Column({ type: "timestamptz", nullable: true })
  usedAt: Date;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}