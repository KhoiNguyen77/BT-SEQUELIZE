import express from "express";
import { likeRestaurant } from "../Controllers/resController.js";

const resRoutes = express.Router();

// Bài 1
resRoutes.post('/res-like', likeRestaurant)

export default resRoutes