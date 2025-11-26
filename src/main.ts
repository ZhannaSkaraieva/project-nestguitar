import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    //распространённых вариантов использования необработанного тела запроса — проверка подписи вебхука
    //для проверки подписи вебхука требуется десериализованное тело запроса для вычисления хеша HMAC.
    //получить необработанный запрос в Nest JS можно с помощью опции rawBody в create.
    //https://docs.nestjs.com/faq/raw-body
    rawBody: true,
    bodyParser: true,
  });
  app.enableCors();
  //app.use('/stripe/webhook', express.raw({ type: 'application/json' }));

  app.useGlobalPipes(new ValidationPipe({ transform: true })); // Додаємо глобальні пайпи для валідації

  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('My API')
    .setDescription('The my documentation for API description')
    .setVersion('1.0')
    .addTag('my api')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
