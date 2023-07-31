import { Exclude } from 'class-transformer';
import {
  Entity,
  Column,
  OneToOne,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  AfterInsert,
} from 'typeorm';
import { Photo } from 'src/photos/photo.entity';

import { v4 as uuidv4 } from 'uuid';
import { Profile } from './profile.entity';
@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  email: string;

  @Column()
  @Exclude() // Giữ lại những trường mà mình muốn giấu đi khi gửi trả về client
  password: string;

  @OneToMany(() => Photo, (photo) => photo.user)
  photos: Photo[];

  @AfterInsert()
  logInsert() {
    console.log(' inserted user with id ', this.id);
  }
}
