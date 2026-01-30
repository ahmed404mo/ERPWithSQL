import { Router } from "express";
import * as productController from "./product.controller.js";
import { auth } from "../../middleware/auth.js";

const router = Router();
// console.log(authController);
router.post("/create", auth,productController.createProduct);
router.get("/", productController.showAllProduct);
router.post("/findId", productController.findProductById);
router.post("/findSku", productController.findProductBySku);
router.put("/update", productController.updateProduct);
router.delete("/delete", productController.deleteProduct);
export default router;
