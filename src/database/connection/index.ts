import mongoose from "mongoose"
import { config } from "dotenv"

config()
const key = process.env.mongo_key

mongoose.set("strictQuery", true)

export const connectToDb = async () => {
  await mongoose.connect(key)
  console.log("connected")
}
