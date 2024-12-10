import environment from '../config/environment';
import bcrypt from 'bcryptjs';
import { sequelize, User } from '.';

const buildDB = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.create({
      fname: environment.FNAME,
      lname: environment.LNAME,
      email: environment.EMAIL,
      password: await bcrypt.hash(environment.PASSWORD, 15),
      day: environment.DAY,
      month: environment.MONTH,
      year: environment.YEAR,
      phone: environment.PHONE,
      role: environment.ROLE,
      gender: environment.GENDER,
    });
  } catch (error) {
    console.log(error);
  }

  // await User.bulkCreate(data.User);
  // await Ranks.bulkCreate(data.Category);
};

if (environment.nodeEnv !== 'test') {
  buildDB();
}

export default buildDB;
