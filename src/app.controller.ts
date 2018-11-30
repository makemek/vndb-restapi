import {
  Post,
  Controller,
  Body,
} from '@nestjs/common'
import { AppService } from './app.service'
import { CharacterReq } from './app.req'

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('character')
  character(@Body() characterReq: CharacterReq) {
    return this.appService.character(characterReq)
  }
}
