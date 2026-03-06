import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
} from 'typeorm';

 

@Entity('requestCall')
export class RequestCall {
    @PrimaryGeneratedColumn()
    id: number; // internal auto-increment id (good for sorting)

    @Column({ unique: true, nullable: false })
    @Index()
    mobile: string;

    @Column({ nullable: true })
    status: string;

    @Column({ default: false })
    isActive: boolean;
 
    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

}
