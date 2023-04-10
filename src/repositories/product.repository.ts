import { connection } from "../database/db.js";
import { Product, updProduct } from "../protocols/product.protocol.js";

export async function insertProduct(product: Product){
    return await connection.query(`
        INSERT 
        INTO product 
            (model, brand, price, year)
        VALUES ($1,$2,$3,$4)`,
        [product.model, product.brand, 
            product.price, product.year]);
}

export async function showAllProducts(): Promise<any> {
    return await connection.query("SELECT * FROM product");   
}

export async function showProduct(id: number){
    return await connection.query("SELECT * FROM product WHERE id = $1",[id]);   
}

export async function deleteProduct(id: number){
    return await connection.query("DELETE FROM product WHERE id = $1",[id]);
}

export async function updateProduct(product: updProduct, id: number){
    const {model, brand, price, year} = product;

    let rules = '';
    model? rules += 'model = '+ model +",": '';
    brand? rules += ' brand = '+brand+",": '';
    price? rules += ' price = '+price+",": '';
    year? rules += ' year = '+year:''; 

    return await connection.query(`UPDATE product SET ${rules} WHERE id = $1`,[id])

}

const productRepository = {
    insertProduct,
    showAllProducts,
    showProduct,
    deleteProduct,
    updateProduct
};

export default productRepository;