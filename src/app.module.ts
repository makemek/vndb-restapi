import { Module } from "@nestjs/common"
import { HomeModule } from "./modules/home/home.module"
import { VndbModule } from "./modules/vndb/vndb.module"
import { ConfigModule } from "./modules/config/config.module"

@Module({
  imports: [
    ConfigModule,
    HomeModule,
    VndbModule,
  ],
})
export class AppModule {}
