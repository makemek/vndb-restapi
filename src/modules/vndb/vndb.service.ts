import { Injectable } from "@nestjs/common"
import * as vndb from "vndb"
import { CharacterReq } from "./vndb.req"
import { promisify } from "util"

const sleep = promisify(setTimeout)

@Injectable()
export class VndbService {

  private _client: any

  private constructor(client: any) {
    this._client = client
  }

  static async build() {
    const client = vndb.createClient()
    // login should be done once, otherwise vndb throw already logged in error
    await client.login()
    return new VndbService(client)
  }

  async character(characterReq: CharacterReq, retry = 20) {
    try {
      return await this._client.character(characterReq)
    } catch ({ data }) {
      if (data.id === "throttled" && retry > 0) {
        const waittime = (0.2 + data.minwait) * 1000
        await sleep(waittime)
        return await this.character(characterReq, retry - 1)
      }
    }
  }
}
