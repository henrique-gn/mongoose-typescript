import { describe, expect, test } from "vitest"
import { UserProps } from "../model"
import { createUser, getAllUsers, updateUser, getUser } from "../module"

describe("User database test", () => {
  const data: UserProps = {
    name: "Test",
    password: "test@1234",
  }

  test("should create user", async () => {
    const user = await createUser(data)
    expect({ name: user.name, password: user.password }).toStrictEqual(data)
  })
  test("should update user", async () => {
    const user = (await getAllUsers())[0]
    await updateUser(user.id, { ...data, name: "updated 2" })
    const updatedUser = await getUser(user.id)
    expect({
      name: updatedUser.name,
      password: updatedUser.password,
    }).toStrictEqual({ ...data, name: "updated 2" })
  })
})
