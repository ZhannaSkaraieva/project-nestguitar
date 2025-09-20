import { Test, TestingModule } from '@nestjs/testing';
import { GuitarController } from './guitar.controller';
import { GuitarService } from './guitar.service';

describe('GuitarController', () => {
  let controller: GuitarController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuitarController],
      providers: [GuitarService],
    }).compile();

    controller = module.get<GuitarController>(GuitarController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
