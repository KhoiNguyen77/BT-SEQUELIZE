import express from "express";
import { order } from "../Controllers/orderController";

const orderRoutes = express.Router();

orderRoutes.post("create-order", order)

export default orderRoutes