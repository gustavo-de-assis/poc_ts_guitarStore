import joi from "joi";

export const productSchema = joi.object({
    model: joi.string().required(),
    brand: joi.string().required(),
    price: joi.number().required(),
    year:  joi.string().regex(/^(190[5-9]|19[5-9]\d|200\d|202[0-3])$/).required()
})