import express from "express";
import { likeRestaurant } from "../Controllers/resController";

const resRoutes = express.Router();

// Bài 1
resRoutes.post('/res-like/:id', likeRestaurant)

export default resRoutes