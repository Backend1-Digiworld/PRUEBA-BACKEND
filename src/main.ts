import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as dotenv from "dotenv";
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Backend de Prueba')
    .setDescription('Este es el Backend para la prueba de Forntend')
    .setVersion('1.0')
    .addBearerAuth()
    .addTag('Auth')
    .addTag('User')
    .addTag('Rol')
    .addTag('Tipe-documents')
    .addTag('Task')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.useGlobalPipes(new ValidationPipe())

  await app.listen(3000);
}
bootstrap();
