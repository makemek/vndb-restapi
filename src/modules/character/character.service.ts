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
    return await this._character.findOne({ id }).exec()
  }
}
