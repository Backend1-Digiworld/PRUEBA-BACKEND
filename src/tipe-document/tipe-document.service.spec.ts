import { Test, TestingModule } from '@nestjs/testing';
import { TipeDocumentService } from './tipe-document.service';

describe('TipeDocumentService', () => {
  let service: TipeDocumentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipeDocumentService],
    }).compile();

    service = module.get<TipeDocumentService>(TipeDocumentService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
