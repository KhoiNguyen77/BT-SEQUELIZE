import express from "express";
import { deleteLike, likeRestaurant, listLike, listRate, rateRestaurant } from "../Controllers/resController.js";

const resRoutes = express.Router();

// Bài 1
resRoutes.post('/res-like', likeRestaurant);
resRoutes.get('/like-by-id/:id', listLike);
resRoutes.get('/rate-by-id/:id', listRate);
resRoutes.delete('/delete-like', deleteLike);
resRoutes.post('/res-rate', rateRestaurant);p
export default resRoutes