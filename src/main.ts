import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AllExceptionFilter } from './common/filters/http-exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalFilters(new AllExceptionFilter())
  app.useGlobalPipes(new ValidationPipe());

  const options = new DocumentBuilder()
  .setTitle('WebMobil UCN API')
  .setDescription('Aplicacion mobil para UCN')
  .setVersion('1.0.0')
  .addBearerAuth()
  .build();

const document = SwaggerModule.createDocument(app, options);

SwaggerModule.setup('/api/docs', app, document, {
  swaggerOptions: {
    filter: true,
  },
});
  await app.listen(process.env.PORT||3000);
}
bootstrap();
