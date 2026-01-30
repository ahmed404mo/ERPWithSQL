import express from "express";
import cors from "cors";
import authRouter from "./modules/auth/index.js";
import categoryRouter from "./modules/category/index.js";
import productRouter from "./modules/product/index.js";
import orderRouter from "./modules/order/index.js";
import userRouter from "./modules/user/index.js";
const exp = () => {
  const app = express();

  const port = process.env.PORT || 3000;

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  app.use("/auth", authRouter);
  app.use("/category", categoryRouter);
  app.use("/product", productRouter);
  app.use("/order", orderRouter);
  app.use("/user", userRouter);

  // Routes
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });

  // Start server
  app.listen(port, () => {
    console.log(`Server running on port port ${port} 🚀`);
  });
};
export default exp;
