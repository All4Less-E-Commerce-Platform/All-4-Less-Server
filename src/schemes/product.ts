import * as Joi from 'joi';

const productValid = (data: object) => {
  const schema = Joi.object({
    title: Joi.string().min(4).max(50).required(),
    description: Joi.string().min(50).max(5000).required(),
    CategoryId: Joi.string().required(),
  });
  return schema.validateAsync(data);
};
export default productValid;
