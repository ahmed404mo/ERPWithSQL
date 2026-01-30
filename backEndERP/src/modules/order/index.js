import { Router } from "express";
import * as orderController from "./order.controller.js";
import { auth } from "../../middleware/auth.js";

const router = Router();

// console.log(authController);
router.post("/create", auth, orderController.createUserOrder);
router.post("/createDetails", auth, orderController.createUserOrderItems);
router.get("/", auth, orderController.getAllUserOrders);
export default router;
