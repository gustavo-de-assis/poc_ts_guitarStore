export type Product = {
    model: string,
    brand: string,
    price: number,
    year: Date | string;
}

export type updProduct = Partial<Product>