import { Get, Post, Controller, Param } from "@nestjs/common"
import { CharacterService } from "./character.service"

@Controller("character")
export class CharacterController {
  constructor(private readonly _characterService: CharacterService) {}

  @Get(":id")
  async id(@Param("id") id: number) {
    return this._characterService.findById(id)
  }
}
