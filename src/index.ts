import { updateUser, getUser } from './database/module/UserModule';
import { createUser, getAllUsers } from "./database"

createUser({
  name: "John",
  password: "1234",
})
getAllUsers()
updateUser('63c7039ce5ecc163bebfa343', { name: 'Updated', password: '1234' })
getUser('63c7039ce5ecc163bebfa343')