import { Module } from '@nestjs/common'
import { HomeModule } from './modules/home/home.module'
import { VndbModule } from './modules/vndb/vndb.module'

@Module({
  imports: [
    HomeModule,
    VndbModule,
  ]
})
export class AppModule {}
