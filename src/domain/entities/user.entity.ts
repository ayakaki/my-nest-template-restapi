import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'last_name' })
  lastName: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'age' })
  age: number;

  @Column({ name: 'birth_place' })
  birthPlace: string;

  @Column({ name: 'created_at' })
  @CreateDateColumn()
  createdAt: string;

  @Column({ name: 'created_by' })
  createdBy: string;

  @Column({ name: 'updated_at' })
  @UpdateDateColumn()
  updatedAt: string;

  @Column({ name: 'updated_by' })
  updatedBy: string;
}
