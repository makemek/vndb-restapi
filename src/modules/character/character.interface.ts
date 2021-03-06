import { Document } from "mongoose"

export interface Character extends Document {
  readonly id: any
  readonly name: string
  readonly original: string
  readonly gender: string
  readonly bloodt: string
  readonly birthday: [number]
  readonly aliases: string
  readonly description: string
  readonly age: number
  readonly image: string
  readonly bust: number
  readonly waist: number
  readonly hip: number
  readonly height: number
  readonly weight: number
  readonly traits: [[number]]
}
