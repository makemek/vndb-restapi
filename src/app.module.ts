import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
    provide: 'AppService',
    useFactory: () => AppService.build(),
  }],
})
export class AppModule {}
