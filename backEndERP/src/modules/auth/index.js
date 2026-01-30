import { Router } from "express";
import * as authController from "./auth.controller.js";
// import { auth } from "../../middleware/auth.js";

const router = Router();
// console.log(authController);
router.post("/register", authController.register);
router.post("/login", authController.login);
router.patch("/updatePass", authController.updataPassword);
export default router;
