import express from "express";
import { likeRestaurant, listLike, listRate } from "../Controllers/resController.js";

const resRoutes = express.Router();

// Bài 1
resRoutes.post('/res-like', likeRestaurant);
resRoutes.get('/like-by-id', listLike);
resRoutes.get('/rate-by-id', listRate);

export default resRoutes