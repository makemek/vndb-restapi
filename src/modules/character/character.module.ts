import { Module } from "@nestjs/common"
import { MongooseModule } from "@nestjs/mongoose"
import { CharacterSchema } from "./character.model"
import { CharacterService } from "./character.service"
import { CharacterController } from "./character.controller"

@Module({
  imports: [
    MongooseModule.forFeature([{ name: "Character", schema: CharacterSchema }]),
  ],
  controllers: [CharacterController],
  providers: [CharacterService],
})
export class CharacterModule {}
