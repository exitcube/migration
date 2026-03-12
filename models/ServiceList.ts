import { Entity, PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,JoinColumn,ManyToOne, Index } from "typeorm";
import { AdminFile } from "./AdminFile";

@Entity("serviceList")
export class ServiceList {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: false })
    displayName: string;

    @Column({ nullable: false })
    value:string;

    @Column({ nullable: true })
    @Index()
    image:string;
    
    @ManyToOne(() => AdminFile, { onDelete: "CASCADE" })
    @JoinColumn({ name: "imageId" })
    adminFile: AdminFile;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({ default: false })
    isActive: boolean;
}