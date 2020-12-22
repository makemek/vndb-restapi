import { Get, Controller, Param, Post, Body } from "@nestjs/common"
import { CharacterService } from "./character.service"

@Controller("character")
export class CharacterController {
  constructor(private readonly _characterService: CharacterService) {}

  @Get(":id")
  async id(@Param("id") id: number) {
    return this._characterService.findById(id)
  }

  @Post()
  async ids(@Body() ids: number[]) {
    return this._characterService.findByIds(ids)
  }
}
