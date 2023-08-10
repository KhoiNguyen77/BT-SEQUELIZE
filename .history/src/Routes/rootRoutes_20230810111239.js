import express from 'express';
import foodRoutes from './foodRoutes.js';

import userRoutes from './userRotues.js';
import resRoutes from './resRoutes.js';
import { order } from '../Controllers/orderController.js';
//  quản lý tên đối tượng endpoint
const rootRoutes = express.Router();

// quản lý đối tượng food
rootRoutes.use("/food", foodRoutes);

// quản lý đối tượng user
rootRoutes.use("/user", userRoutes);

rootRoutes.use("/res", resRoutes)

rootRoutes.use("/order", order)
export default rootRoutes;