import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { PhotosModule } from './photos/photos.module';
import { Photo } from './photos/photo.entity';
import { Profile } from './users/entities/profile.entity';
import { QuestionsModule } from './questions/questions.module';
import { CategoryQuestionModule } from './category_question/category_question.module';
import { Category_question } from './category_question/entities/category_question.entity';
import { Question } from './questions/entities/question.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '12345678',
      database: 'demo_typeorm',
      entities: [User, Photo, Profile, Category_question, Question],
      synchronize: true,
    }),
    UsersModule,
    PhotosModule,
    QuestionsModule,
    CategoryQuestionModule,
  ],
})
export class AppModule {}
