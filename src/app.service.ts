import { Injectable } from '@nestjs/common'
import * as vndb from 'vndb'
import { CharacterReq } from './app.req'

@Injectable()
export class AppService {

  private _client

  constructor() {
    this._client = vndb.createClient()
    this._client.login()
  }

  async character(characterReq: CharacterReq) {
    return await this._client.character(characterReq)
  }
}
