import express from 'express';
import { getUser, getUserById, createUser, updateUser, deleteUser } from '../Controllers/userController.js';
const userRoutes = express.Router();
// R
userRoutes.get("/get-user", getUser)
userRoutes.get("/get-user-by-id/:id", getUserById)
// CUD
userRoutes.post("/create-user", createUser);
userRoutes.put("/update-user", updateUser);
userRoutes.delete("/delete-user/:id", deleteUser);
export default userRoutes;