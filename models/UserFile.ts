import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn,
    Index,
  } from "typeorm";
  import { User } from "./User";
  import { File } from "./File";
  
  @Entity({ name: "userFile" }) 
  export class UserFile {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({ name: "userId" })
    @Index()
    userId: number;
  

    @ManyToOne(() => User, { onDelete: "CASCADE" })
    @JoinColumn({ name: "userId" })
    user: User;
  
    @Column({ name: "fileId" })
    @Index()
    fileId: number;
  
    @ManyToOne(() => File, { onDelete: "CASCADE" })
    @JoinColumn({ name: "fileId" })
    file: File;
  
    @Column({ nullable: true })
    category: string;
  
    @Column({ default: false })
    isActive: boolean;
  
    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  }