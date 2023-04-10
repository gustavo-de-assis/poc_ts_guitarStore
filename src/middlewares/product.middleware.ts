import httpStatus from "http-status";
import { productSchema } from "../schemas/product.schema.js";

export default function productValidation(req, res, next){
    const product = req.body;

    const validationError = productSchema.validate(product, {
        abortEarly: false,
    }).error;
    if(validationError){
        const error = validationError.details.map((e) => e.message);
        return res.status(httpStatus.UNAUTHORIZED).send(error);
    }
    
    next();

}