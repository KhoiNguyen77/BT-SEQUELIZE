import express from "express";
import { order } from "../Controllers/orderController.js";

const orderRoutes = express.Router();

orderRoutes.post("create-order", order)

export default orderRoutes