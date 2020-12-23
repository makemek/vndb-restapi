import * as mongoose from "mongoose"

// https://vndb.org/d11#5.4
export const CharacterSchema = new mongoose.Schema(
  {
    id: Number,
    name: String,
    original: String,
    gender: String,
    bloodt: String,
    birthday: [Number],
    aliases: String,
    description: String,
    age: Number,
    image: String,
    bust: Number,
    waist: Number,
    hip: Number,
    height: Number,
    weight: Number,
    traits: [[Number]],
  },
  { collection: "character", id: false },
)
