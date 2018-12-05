import { Module } from "@nestjs/common"
import { VndbController } from "./vndb.controller"
import { VndbService } from "./vndb.service"

@Module({
  imports: [],
  controllers: [VndbController],
  providers: [
    {
      provide: "VndbService",
      useFactory: () => VndbService.build(),
    },
  ],
})
export class VndbModule {}
