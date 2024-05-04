import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { CORS } from './conf/cors';
import { SwaggerModule } from '@nestjs/swagger';
import { SW } from './conf/doc';
import { ConfigService } from '@nestjs/config';
import { CONFIG } from './conf/keys';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );
  const reflector = app.get(Reflector)
  app.useGlobalInterceptors(new ClassSerializerInterceptor(reflector))

  app.enableCors(CORS)
  app.setGlobalPrefix('v1/api')
  const document = SwaggerModule.createDocument(app, SW);
  SwaggerModule.setup('v1/api/docs', app, document);
  const port = app.get(ConfigService).get(CONFIG.PORT_APLICATION)
  await app.listen(port);
}
bootstrap();
