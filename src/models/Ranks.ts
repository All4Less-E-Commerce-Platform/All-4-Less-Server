import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Rank extends Model {
  declare id: number;
  declare rankDescriptionEn: string;
  declare rankNameEn: string;
  declare rankWord: string;
  declare cardId: string;
  declare rankName: string;
  declare cardType: string;
  declare trendTag?: object;
  declare rankDescription: string;
  declare rankWordEn: string;
  declare secondCategoryId?: string;
  // declare productList?: object;
}

Rank.init(
  {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },
    rankDescriptionEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rankNameEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rankWord: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true,
    },
    rankName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cardType: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    trendTag: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    rankDescription: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rankWordEn: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    secondCategoryId: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    tableName: 'Ranks',
    timestamps: true, // Ensures that createdAt and updatedAt are included
  },
);

export default Rank;
