import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ["http://127.0.0.1:3002", "http://www.wf-builder.kro.kr:3002", "http://wf-builder.kro.kr:3002"]
  });
  await app.listen(3000);
}
bootstrap();
