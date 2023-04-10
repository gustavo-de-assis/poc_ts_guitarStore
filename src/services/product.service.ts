import { connection } from "../database/db.js";
import { Product, updProduct } from "../protocols/product.protocol.js";
import productRepository from "../repositories/product.repository.js";

async function getProducts(){
    const result  = await productRepository.showAllProducts();
    return result.rows;

}

async function postProduct(product: Product){
    return await productRepository.insertProduct(product);
}

async function getProductInfoById(id: number){
    const result = await productRepository.showProduct(id);

    return result.rows[0];
}

async function deleteProduct(id: number){
    return await productRepository.deleteProduct(id);
}

async function updateInfo(product: updProduct, id: number){
    await productRepository.updateProduct(product, id);
}

const productService = {
    getProducts,
    getProductInfoById,
    postProduct,
    deleteProduct,
    updateInfo
}

export default productService;