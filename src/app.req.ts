class CommonDto {
  readonly page: Number
  readonly results: Number
  readonly sort: String
  readonly reverse: Boolean
}

export class CharacterReq extends CommonDto {
  readonly filters: String
}
