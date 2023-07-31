import { Entity, Column, PrimaryColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { v4 as uuidv4 } from 'uuid';
@Entity({ name: 'photo' })
export class Photo {
  @PrimaryColumn()
  id: string = uuidv4();

  @Column()
  albumId: string;

  @Column()
  title: string;

  @Column()
  url: string;

  @Column()
  thumbnailUrl: string;

  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
