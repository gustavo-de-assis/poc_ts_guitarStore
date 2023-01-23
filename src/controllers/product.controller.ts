import { Request, Response } from "express";
import { Product, updProduct } from "../protocols/product.protocol.js";
import { deleteProduct, insertProduct, showAllProducts, showProduct, updateProduct } from "../repositories/product.repository.js";
import { productSchema } from "../schemas/product.schema.js";


export async function registerProduct(req: Request, res: Response){
    const newProduct = req.body as Product;

    productSchema.validate(newProduct);

    insertProduct(newProduct);

    return res.send('Product resgistered successfully!');    
} 

export async function listProducts(req: Request, res: Response): Promise <any>{
    const result = await showAllProducts();
    return res.status(200).send(result.rows);
}

export async function productInfo(req: Request, res: Response) {
    const {id} = req.params;
    
    if(isNaN(Number(id))){
        return  res.status(400).send('Invalid id');
    }
    try {
        const prod = await showProduct(Number(id));
        if(prod.rows.length === 0){
            res.status(404).send("Product not Found!");
        } else {
            res.status(200).send(prod.rows);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }

}

export async function removeProduct(req: Request, res: Response){
    const {id} = req.params;
    
    if(isNaN(Number(id))){
        return  res.status(400).send('Invalid id');
    }
    try {
        const prod = await showProduct(Number(id));
        if(prod.rows.length === 0){
            res.status(404).send("Product not Found!");
        } else {
            deleteProduct(Number(id));
            res.status(200).send("OK");
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export async function updateProductInfo(req: Request, res: Response){
    const {id} = req.params;
    const info = req.body as updProduct;

    if(isNaN(Number(id))){
        return  res.status(400).send('Invalid id');
    }
    productSchema.validate(info);

    await updateProduct(info,Number(id));

    res.status(200).send('OK');
}
