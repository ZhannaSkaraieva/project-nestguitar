import { Test, TestingModule } from '@nestjs/testing';
import { GuitarService } from './guitar.service';

describe('GuitarService', () => {
  let service: GuitarService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuitarService],
    }).compile();

    service = module.get<GuitarService>(GuitarService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
