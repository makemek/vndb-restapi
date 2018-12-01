import { NestFactory } from '@nestjs/core';
import { INestApplication, INestExpressApplication } from '@nestjs/common'
import { AppModule } from './app.module';
import * as cors from 'cors'
import * as slowdown from 'express-slow-down'

bootstrap()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  setup(app)
  await app.listen(process.env.PORT || 3000)
}

function setup(app: INestApplication & INestExpressApplication) {
  app.enable("trust proxy")
  app.use(cors())
  const speedLimiter = slowdown({
    windowMs: 10 * 60 * 1000,
    delayAfter: 180,
    delayMs: 3 * 1000,
  })
  app.use('/character', speedLimiter)
}
