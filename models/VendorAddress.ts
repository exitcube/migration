import { Entity, PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,JoinColumn,OneToOne,ManyToOne,Generated,Index} from "typeorm";
import { Vendor } from "./Vendor";

@Entity("vendorAddress")
export class VendorAddress {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Index()
  vendorId: number;
  
  @ManyToOne(() => Vendor, { onDelete: "CASCADE" })  
  @JoinColumn({ name: "vendorId" })
  vendor: Vendor;

  @Column({ nullable: true })
  address: string;

  @Column({length: 100,nullable: true })
  country: string;

  @Column({length: 100 ,nullable: true})
  city: string;

  @Column({ length: 100,nullable: true })
  state: string;

  @Column({length: 20,nullable: true })
  pinCode: string;

  @Column({ type: 'decimal', precision: 10, scale: 5, nullable: false })
  latitude: number;

  @Column({ type: 'decimal', precision: 10, scale: 5, nullable: false })
  longitude: number;

  @Column({ default: false })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

}