import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class User extends Model {
  declare id: number;
  declare fname: string;
  declare lname: string;
  declare email: string;
  declare password: string;
  declare day: number;
  declare month: number;
  declare year: number;
  declare phone: string;
  declare gender: string;
  declare role: string;
}

User.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    fname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isIn: [['male', 'female', 'other']],
      },
    },
  },
  {
    sequelize,
    tableName: 'Users',
    timestamps: true, // Ensures that createdAt and updatedAt are included
  },
);

export default User;
