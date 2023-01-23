import { Router } from "express";
import { listProducts, productInfo, registerProduct, removeProduct } from "../controllers/product.controller.js";

const productRoute = Router();

productRoute.post("/register", registerProduct);
productRoute.get("/products", listProducts);
productRoute.get("/products/:id", productInfo);
productRoute.delete("/remove/:id", removeProduct);
/*
productRoute.update("/update/:id");
*/
export default productRoute;