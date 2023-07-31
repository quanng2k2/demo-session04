import { Test, TestingModule } from '@nestjs/testing';
import { CategoryQuestionController } from './category_question.controller';

describe('CategoryQuestionController', () => {
  let controller: CategoryQuestionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CategoryQuestionController],
    }).compile();

    controller = module.get<CategoryQuestionController>(CategoryQuestionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
