import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
    Generated,
    OneToOne,
    JoinColumn,
    ManyToOne
} from 'typeorm';

 
import { EnquiryOwner } from './EnquiryOwner';

@Entity("enquiryOrganization")
export class EnquiryOrganization {
  @PrimaryGeneratedColumn()
  id: number; // internal auto-increment id (good for sorting)

  @Column({ nullable: true })
  ownerId: number;

  @ManyToOne(() => EnquiryOwner, { onDelete: "CASCADE" })
  @JoinColumn({ name: "ownerId" })
  enquiryOwner: EnquiryOwner;

  @Column({ nullable: true })
  buisnessName: string;

  @Column({ nullable: true })
  email: string;

  @Column({ unique: true, nullable: false })
  @Index()
  mobile: string;

  @Column({ nullable: true })
  address: string;

  @Column({ length: 100, nullable: true })
  country: string;

  @Column({ length: 100, nullable: true })
  city: string;

  @Column({ length: 100, nullable: true })
  state: string;

  @Column({ length: 20, nullable: true })
  pinCode: string;

  @Column({ length: 20, nullable: true })
  buisnessType: string;

  @Column({ length: 20, nullable: true })
  buisnessExperience: string;

  @Column({ nullable: true })
  additionalInfo: string;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
