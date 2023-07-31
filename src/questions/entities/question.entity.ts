import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { Category_question } from 'src/category_question/entities/category_question.entity';

@Entity({ name: 'questions' })
export class Question {
  @PrimaryGeneratedColumn()
  id: string = uuidv4();

  @Column()
  address: string;

  @Column()
  city: string;

  @ManyToMany(() => Category_question)
  @JoinTable()
  categories: Category_question[];
}
