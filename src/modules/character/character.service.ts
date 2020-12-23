import { Model } from "mongoose"
import { Injectable } from "@nestjs/common"
import { InjectModel } from "@nestjs/mongoose"
import { Character } from "./character.interface"

@Injectable()
export class CharacterService {
  constructor(
    @InjectModel("Character") private readonly _character: Model<Character>,
  ) {}

  async findById(id: number): Promise<Character> {
    return await this._character.findOne({ id }, { _id: 0 }).exec()
  }

  async findByIds(ids: number[]): Promise<Character[]> {
    return await this._character.find(
      {
        id: {
          $in: ids,
        },
      },
      { _id: 0 },
    )
  }
}
