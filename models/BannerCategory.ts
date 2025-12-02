import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  OneToOne,
  ManyToOne,
  Index,
} from "typeorm";
import { AdminUser } from "./AdminUser";

@Entity("bannerCategory")
export class BannerCategory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text", nullable: true })
  dsiplayText: string;

  @Column({ nullable: true })
  value: string;

  @Column({ nullable: true })
  createdBy: number;

  @ManyToOne(() => AdminUser, { onDelete: "CASCADE" })
  @JoinColumn({ name: "approvedBy" })
  adminUser: AdminUser;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ default: false })
  isActive: boolean;
}
