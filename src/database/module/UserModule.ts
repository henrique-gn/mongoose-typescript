import { UserModel, UserProps } from "../model"
import { connectToDb } from "../connection"

export const createUser = async (user: UserProps) => {
  connectToDb()
  const userRef = new UserModel({
    name: user.name,
    password: user.password,
  })
  const result = await userRef.save()
  console.log("user created, result:")
  console.log(result.id)
  return result
}
export const getUser = async (id: string) => {
  connectToDb()
  const result = await UserModel.findOne({_id:id})
  console.log("user found, result:")
  console.log(result)
  return result
}
export const getAllUsers = async () => {
  connectToDb()
  const result = await UserModel.find()
  console.log("users found, result:")
  console.log(result)
  return result
}
export const updateUser = async (id: string, user?: UserProps) => {
  connectToDb()
  const result = await UserModel.updateOne({
    _id: id,
    name: user.name,
    password: user.password,
  })
  console.log("user updated, result:")
  console.log(result)
  return result
}
export const deleteUser = async (id: string) => {
  connectToDb()
  const result = await UserModel.deleteOne({ _id: id })
  console.log("user deleted, result:")
  console.log(result)
  return result
}
