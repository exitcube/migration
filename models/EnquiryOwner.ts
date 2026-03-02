import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
    Generated,
    OneToOne,
    JoinColumn
} from 'typeorm';

import { UserDevice } from '../models';
import { UserFile } from '../models';

@Entity('enquiryOwner')
export class EnquiryOwner {
    @PrimaryGeneratedColumn()
    id: number; // internal auto-increment id (good for sorting)

    @Column({ nullable: true })
    name: string;

    @Column({ nullable: true })
    email: string;

    @Column({ unique: true, nullable: false })
    @Index()
    mobile: string;

    @Column({ default: false })
    isActive: boolean;
 
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
