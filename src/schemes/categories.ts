import * as Joi from 'joi';

export const categoriesSchema = (data: object) => {
  const schema = Joi.object({
    title: Joi.string().min(4).max(50).required(),
    description: Joi.string().min(50).max(5000).required(),
    cover: Joi.string(),
  });
  return schema.validateAsync(data);
};

export const UpdateProductValid = (data: object) => {
  const schema = Joi.object({
    title: Joi.string().min(4).max(50),
    description: Joi.string().min(50).max(5000),
    cover: Joi.string(),
  });
  return schema.validateAsync(data);
};
