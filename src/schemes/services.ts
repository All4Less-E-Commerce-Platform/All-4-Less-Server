import * as Joi from 'joi';

export const createServiceValid = (data: object) => {
  const schema = Joi.object({
    title: Joi.string().min(4).max(50).required(),
    description: Joi.string().min(30).max(5000).required(),
    cover: Joi.string().min(30).required(),
  });
  return schema.validateAsync(data);
};

export const UpdateServiceValid = (data: object) => {
  const schema = Joi.object({
    title: Joi.string().min(4).max(50),
    description: Joi.string().min(30).max(5000),
    cover: Joi.string().min(30),
  });
  return schema.validateAsync(data);
};
