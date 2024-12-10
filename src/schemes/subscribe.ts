import * as Joi from 'joi';

export const subscribeSchema = Joi.object({
  email: Joi.string()
    .min(4)
    .max(50)
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)
    .required(),
});
