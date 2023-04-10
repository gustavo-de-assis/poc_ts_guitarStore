import { Request, Response } from "express";
import { Product, updProduct } from "../protocols/product.protocol.js";
import { deleteProduct, insertProduct, showAllProducts, showProduct, updateProduct } from "../repositories/product.repository.js";
import { productSchema } from "../schemas/product.schema.js";
import productService from "../services/product.service.js";
import httpStatus from "http-status";

export async function registerProduct(req: Request, res: Response): Promise <any>{
    const newProduct = req.body as Product;
    try {
        await productService.postProduct(newProduct);
        return res.status(httpStatus.CREATED).send('Product resgistered successfully!');    
    
    } catch (error) {
        console.log(error);
        res.sendStatus(httpStatus.BAD_REQUEST);
    }
} 

export async function listProducts(req: Request, res: Response): Promise <any>{
    const result = await productService.getProducts();
    return res.status(httpStatus.OK).send(result);
}

export async function productInfo(req: Request, res: Response): Promise <any> {
    const {id} = req.params;
    
    if(isNaN(Number(id))){
        return  res.status(httpStatus.UNAUTHORIZED).send('Invalid id');
    }
    try {
        const prod = await productService.getProductInfoById(Number(id));

        if(!prod){
            res.status(httpStatus.NOT_FOUND).send("Product not Found!");
        } else {
            res.status(httpStatus.OK).send(prod);
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(httpStatus.BAD_REQUEST);
    }

}

export async function removeProduct(req: Request, res: Response): Promise <any>{
    const {id} = req.params;
    
    if(isNaN(Number(id))){
        return  res.status(400).send('Invalid id');
    }
    try {
        const prod = await productService.getProductInfoById(Number(id));
        if(!prod){
            res.status(httpStatus.NOT_FOUND).send("Product not Found!");
        } else {
            productService.deleteProduct(Number(id));
            res.status(httpStatus.OK).send("Product Removed Successfully!");
        }
    } catch (error) {
        console.log(error);
        res.sendStatus(httpStatus.BAD_REQUEST);
    }
}

export async function updateProductInfo(req: Request, res: Response): Promise <any>{
    const {id} = req.params;
    const info = req.body as updProduct;

    if(isNaN(Number(id))){
        return  res.status(httpStatus.UNAUTHORIZED).send('Invalid id');
    }
    productSchema.validate(info);

    await productService.updateInfo(info,Number(id));

    res.status(httpStatus.OK).send("Updated info successfully!");
}
