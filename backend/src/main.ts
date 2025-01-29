import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);
  
  // CORS設定
  app.enableCors({
    origin: '*', // 開発環境用。本番環境では適切なオリジンを設定
    methods: ['GET', 'POST'],
    allowedHeaders: ['content-type'],
  });

  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
