import {
  Get,
  Post,
  Controller,
  Body,
} from "@nestjs/common"
import { VndbService } from "./vndb.service"
import { CharacterReq } from "./vndb.req"

@Controller("vndb")
export class VndbController {
  constructor(private readonly vndbService: VndbService) {}

  @Get()
  root() {
    return "Hello, World!"
  }

  @Post("character")
  character(@Body() characterReq: CharacterReq) {
    return this.vndbService.character(characterReq)
  }
}
