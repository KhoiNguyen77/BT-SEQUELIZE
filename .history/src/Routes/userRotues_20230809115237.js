import express from 'express';
import { getUser, getUserById } from '../Controllers/userController.js';
const userRoutes = express.Router();

userRoutes.get("/get-user", getUser)
userRoutes.get("/get-user-by-id/:id", getUserById)

export default userRoutes;