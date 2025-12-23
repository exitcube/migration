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
import { RewardCode } from "./RewardCode";

@Entity("rewardUsage")
export class RewardUsage {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  rewardId: number;

  @ManyToOne(() => Reward, { onDelete: "CASCADE" })
  @JoinColumn({ name: "rewardId" })
  reward: Reward;

  @Column()
  userId: number;

  @ManyToOne(() => User, { onDelete: "CASCADE" })
  @JoinColumn({ name: "userId" })
  user: User;

  @Column({ nullable: true })
  rewardCodeId: number;

  @ManyToOne(() => RewardCode, { onDelete: "SET NULL" })
  @JoinColumn({ name: "rewardCodeId" })
  rewardCode: RewardCode;

  @Column({ nullable: true })
  usedCode: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}