import { connection } from "../database/db.js";
import { Product } from "../protocols/product.protocol.js";

export async function insertProduct(product: Product){
    await connection.query(`
        INSERT 
        INTO product 
            (model, brand, price, year)
        VALUES ($1,$2,$3,$4)`,
        [product.model, product.brand, 
            product.price, product.year]);
}

export async function showAllProducts() {
    return await connection.query("SELECT * FROM product");   
}

export async function showProduct(id: number){
    return await connection.query("SELECT * FROM product WHERE id = $1",[id]);   
}

export async function deleteProduct(id: number){
    await connection.query("DELETE FROM product WHERE id = $1",[id]);
}