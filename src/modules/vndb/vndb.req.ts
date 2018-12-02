class CommonDto {
  readonly page: number
  readonly results: number
  readonly sort: string
  readonly reverse: boolean
}

export class CharacterReq extends CommonDto {
  readonly filters: string
}
