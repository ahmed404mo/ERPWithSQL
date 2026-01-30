import { Router } from "express";
import * as userController from "./user.controller.js";
import { auth } from "../../middleware/auth.js";

const router = Router();
// console.log(authController);
router.get("/",auth, userController.getUserData);
router.get("/all", userController.getAllUsers);
router.put("/update",auth, userController.updateUserData);
router.delete("/delete",auth, userController.deleteUserData);
export default router;
