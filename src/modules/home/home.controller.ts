import {
  Get,
  Controller,
} from '@nestjs/common'

@Controller()
export class HomeController {
  @Get()
  root() {
    return 'Hello, World!'
  }
}
