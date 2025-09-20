import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GuitarModule } from './guitar/guitar.module';

@Module({
  imports: [GuitarModule], // імпортуємо модуль GuitarModule, добавляется автоматически при создании сущности
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
