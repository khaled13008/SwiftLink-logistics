import Joi from 'joi';

export const validatePackage = (data) => {
  const schema = Joi.object({
    trackingNumber: Joi.string().required(),
    origin: Joi.string().required(),
    destination: Joi.string().required(),
    weight: Joi.number().positive(),
    dimensions: Joi.object({
      length: Joi.number().positive(),
      width: Joi.number().positive(),
      height: Joi.number().positive()
    }),
    estimatedDelivery: Joi.date(),
    notes: Joi.string()
  });

  return schema.validate(data);
};