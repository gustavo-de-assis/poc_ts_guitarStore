import { Router } from "express";
import { listProducts, productInfo, registerProduct, removeProduct, updateProductInfo } from "../controllers/product.controller.js";

const productRoute = Router();

productRoute.post("/register", registerProduct);
productRoute.get("/products", listProducts);
productRoute.get("/products/:id", productInfo);
productRoute.delete("/remove/:id", removeProduct);
productRoute.patch("/update/:id", updateProductInfo);
/*
*/
export default productRoute;