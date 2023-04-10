import { Router } from "express";
import { listProducts, productInfo, registerProduct, removeProduct, updateProductInfo } from "../controllers/product.controller.js";
import { productSchema } from "../schemas/product.schema.js";
import productValidation from "../middlewares/product.middleware.js";

const productRoute = Router();

productRoute.post("/register", productValidation, registerProduct);
productRoute.get("/products", listProducts);
productRoute.get("/products/:id", productInfo);
productRoute.delete("/remove/:id", removeProduct);
productRoute.patch("/update/:id", updateProductInfo);
/*
*/
export default productRoute;