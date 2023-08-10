import express from "express";
import { likeRestaurant, listLike } from "../Controllers/resController.js";

const resRoutes = express.Router();

// Bài 1
resRoutes.post('/res-like', likeRestaurant);
resRoutes.get('/like-by-id', listLike);

export default resRoutes