import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger('bootstrap');
  const app = await NestFactory.create(AppModule);

  const serverConfig = config.get('server')
  console.log({serverConfig, env: process.env.NODE_ENV} )

  const port = 3101;
  await app.listen(port);
  logger.log(`Application listening on port:${port}`);
}
bootstrap();
