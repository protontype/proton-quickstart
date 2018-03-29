import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TasksModel {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ nullable: true })
    title: string;
    @Column()
    done: boolean;
    @Column()
    userId: number;
}