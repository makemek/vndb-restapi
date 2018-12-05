import { Module, Global } from "@nestjs/common"
import { configProviders } from "./config.providers"

@Global()
@Module({
  providers: [...configProviders],
  exports: [...configProviders],
})
export class ConfigModule {}
