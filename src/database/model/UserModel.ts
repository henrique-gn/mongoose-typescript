import { Schema, model } from "mongoose"

export interface UserProps {
  name: string
  password: string
}

export const userSchema = new Schema<UserProps>({
  name: { type: String, required: true },
  password: { type: String, required: true },
})

export const UserModel = model<UserProps>("user", userSchema)
