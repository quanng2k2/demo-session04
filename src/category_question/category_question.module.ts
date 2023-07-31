import { Module } from '@nestjs/common';
import { CategoryQuestionController } from './category_question.controller';
import { CategoryQuestionService } from './category_question.service';

@Module({
  controllers: [CategoryQuestionController],
  providers: [CategoryQuestionService]
})
export class CategoryQuestionModule {}
