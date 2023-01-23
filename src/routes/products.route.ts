import { Router } from "express";
import { registerProduct } from "../controllers/product.controller.js";

const productRoute = Router();

productRoute.post("/register", registerProduct);
/*
productRoute.get("/products", listProducts);
productRoute.get("/products/:id", productInfo);
productRoute.delete("/remove/:id");
productRoute.update("/update/:id");
*/
export default productRoute;