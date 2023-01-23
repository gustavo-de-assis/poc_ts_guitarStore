import Joi from "joi";

export const productSchema = Joi.object({
    model: Joi.string().required,
    brand: Joi.string().required,
    price: Joi.number().required,
    year:  Joi.string().regex(/^(190[5-9]|19[5-9]\d|200\d|202[0-3])$/).required
})