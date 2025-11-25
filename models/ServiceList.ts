import { Entity, PrimaryGeneratedColumn,Column,CreateDateColumn,UpdateDateColumn,JoinColumn,ManyToOne } from "typeorm";
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