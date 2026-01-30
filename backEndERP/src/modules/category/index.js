import { Router } from "express";
import * as categoryController from "./category.controller.js";
import { auth } from "../../middleware/auth.js";

const router = Router();
// console.log(authController);
router.post("/create",auth, categoryController.addNewCategory);
router.get("/all", categoryController.showAllCategory);
router.put("/update", auth,categoryController.updateCategory);
router.delete("/delete", auth,categoryController.DeleteCategory);
export default router;
