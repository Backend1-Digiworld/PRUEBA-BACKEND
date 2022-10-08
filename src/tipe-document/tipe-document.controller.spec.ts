import { Test, TestingModule } from '@nestjs/testing';
import { TipeDocumentController } from './tipe-document.controller';

describe('TipeDocumentController', () => {
  let controller: TipeDocumentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipeDocumentController],
    }).compile();

    controller = module.get<TipeDocumentController>(TipeDocumentController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
