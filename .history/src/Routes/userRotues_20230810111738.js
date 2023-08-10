import express from 'express';
import { getUser, getUserById, createUser, updateUser, deleteUser, getUserByName, listLike, listRate } from '../Controllers/userController.js';
const userRoutes = express.Router();
// R
userRoutes.get("/get-user", getUser)
userRoutes.get("/get-user-by-id/:id", getUserById)
userRoutes.get("/get-user-by-name/:fullName", getUserByName)
// CUD
userRoutes.post("/create-user", createUser);
userRoutes.put("/update-user/:id", updateUser);
userRoutes.delete("/delete-user/:id", deleteUser);

// Bài 1
userRoutes.get("/like-by-id/:id", listLike);
userRoutes.get("/rate-by-id/:id", listRate);

export default userRoutes;