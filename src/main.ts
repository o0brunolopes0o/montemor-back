require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './modules/app/app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use((req, res, next) => {
    const oldWrite = res.write;
    const oldEnd = res.end;

    const chunks = [];

    res.write = (...restArgs) => {
      chunks.push(Buffer.from(restArgs[0]));
      oldWrite.apply(res, restArgs);
    };

    res.end = (...restArgs) => {
      if (restArgs[0]) {
        chunks.push(Buffer.from(restArgs[0]));
      }
      const body = Buffer.concat(chunks).toString('utf8');

      Logger.log(`${new Date().toString()} - ${req.originalUrl} - ${res.statusCode} - ${body}`, 'RouteLogger');

      oldEnd.apply(res, restArgs);
    };

    next();
  });

  const config = new DocumentBuilder()
    .setTitle('EMPREGA MONTE MOR')
    .setDescription('BACKEND EMPREGA MONTE MOR')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.APP_PORT);

  console.log(`Application is running on port: ${process.env.APP_PORT}`);
}
bootstrap();