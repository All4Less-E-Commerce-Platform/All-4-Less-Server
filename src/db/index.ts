import { User, Products, Ranks } from '../models';

import sequelize from './connection';

Ranks.hasMany(Products);
Products.belongsTo(Ranks);

export {
  User,
  // Category,
  Products,
  // ProductAttripute,
  // ProductGalary,
  // Contact,
  // Slider,
  // Settings,
  // Service,
  sequelize,
};
