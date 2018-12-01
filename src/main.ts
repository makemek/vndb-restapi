import { NestFactory } from '@nestjs/core';
import { INestApplication, INestExpressApplication } from '@nestjs/common'
import { AppModule } from './app.module';
import * as cors from 'cors'

bootstrap()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  setup(app)
  await app.listen(process.env.PORT || 3000)
}

function setup(app: INestApplication & INestExpressApplication) {
  app.enable("trust proxy")
  app.use(cors())
}
