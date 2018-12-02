import { INestApplication, INestExpressApplication } from "@nestjs/common"
import * as cors from "cors"

export default function setup(app: INestApplication & INestExpressApplication) {
  app.enable("trust proxy")
  app.use(cors())
}
