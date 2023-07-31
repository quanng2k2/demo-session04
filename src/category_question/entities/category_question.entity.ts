import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity({ name: 'category_questions' })
export class Category_question {
  @PrimaryGeneratedColumn()
  id: string = uuidv4();

  @Column()
  ques: string;
}
