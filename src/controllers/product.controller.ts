import { Request, Response } from "express";
import { Product } from "../protocols/product.protocol.js";
import { insertProduct } from "../repositories/product.repository.js";
import { productSchema } from "../schemas/product.schema.js";


export async function registerProduct(req: Request, res: Response){
    const newProduct = req.body as Product;

    productSchema.validate(newProduct);

    insertProduct(newProduct);

    return res.send('Product resgistered successfully!');    
} 