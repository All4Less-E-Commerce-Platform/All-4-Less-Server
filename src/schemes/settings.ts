import * as Joi from 'joi';

const SettingsValid = (data: object) => {
  // { email, phone, address, bio }
  const schema = Joi.object({
    email: Joi.string().min(4).max(50),
    phone: Joi.string().min(7).max(5000),
    address: Joi.string().min(5).max(5000),
    bio: Joi.string().min(5).max(5000),
  });
  return schema.validateAsync(data);
};
export default SettingsValid;
