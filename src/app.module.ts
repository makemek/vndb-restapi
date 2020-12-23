import { Module } from "@nestjs/common"
import { HomeModule } from "./modules/home/home.module"
import { VndbModule } from "./modules/vndb/vndb.module"
import { ConfigModule } from "./modules/config/config.module"
import { MongooseModule } from "@nestjs/mongoose"
import {
  loadConfigSync,
  EnvironmentConfig,
} from "./modules/config/config.providers"
import { CharacterModule } from "./modules/character/character.module"

const config: EnvironmentConfig = loadConfigSync()
@Module({
  imports: [
    MongooseModule.forRoot(config.mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    ConfigModule,
    HomeModule,
    VndbModule,
    CharacterModule,
  ],
})
export class AppModule {}
