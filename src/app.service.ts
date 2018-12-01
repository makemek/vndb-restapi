import { Injectable } from '@nestjs/common'
import * as vndb from 'vndb'
import { CharacterReq } from './app.req'

@Injectable()
export class AppService {

  private _client: any

  private constructor(client: any) {
    this._client = client
  }

  static async build() {
    const client = vndb.createClient()
    // login should be done once, otherwise vndb throw already logged in error
    await client.login()
    return new AppService(client)
  }

  async character(characterReq: CharacterReq) {
    return await this._client.character(characterReq)
  }
}
