import { Op } from 'sequelize';
import { Products } from '../models';
import Rank from '../models/Ranks';
import { stat } from 'fs';

export const gitWatchesController = async (
  req: any,
  res: { json: (arg0: { status: number; data: Products[] }) => void },
) => {
  const products = await Products.findAll({
    where: {
      subject: {
        [Op.like]: '%watch%', // This will match rows where "subject" contains "watch"
      },
    },
  });

  res.json({
    status: 200,
    data: products,
  });
};

export const gitHomeController = async (
  req: any,
  res: { json: (arg0: { status: number; data: Products[] }) => void },
) => {
  const ranks = await Rank.findAll({ logging: false });

  const newArr = ranks.map(ran => ran.dataValues);

  const data = await Promise.all(
    newArr.map(async rank => {
      const productList = await Products.findAll({
        where: { rankId: String(rank.id) },
        logging: false,
      });

      let products = productList;
      if (productList.length > 30) {
        products = productList.slice(0, 30);
      }

      return { ...rank, productList: products };
    }),
  );

  res.json({ data, status: 200 });

  // console.error('API Error:', error);
};

export const gitClothesController = async (
  req: any,
  res: {
    status(arg0: number): any;
    json: (arg0: { status: number; data: Products[] }) => void;
  },
) => {
  const products = await Products.findAll({
    where: {
      [Op.or]: [
        { category: "Men's Clothing" },
        { category: 'Apparel & Accessories' },
      ],
    },
  });

  res.status(200).json({
    data: products,
    status: 200,
  });
};

export const gitFootwearController = async (req: any, res: any) => {
  const products = await Products.findAll({
    where: {
      category: 'Shoes',
    },
  });

  res.status(200).json({
    data: products,
    status: 200,
  });
};

export const gitElectronicsController = async (req: any, res: any) => {
  const products = await Products.findAll({
    where: {
      category: 'Consumer Electronics',
    },
  });

  res.status(200).json({
    data: products,
    status: 200,
  });
};

export const gitProductsController = async (req: any, res: any) => {
  const products = await Products.findAll();

  res.status(200).json({
    data: products,
    status: 200,
  });
};

export const gitMachinesController = async (req: any, res: any) => {
  const products = await Products.findAll({
    where: {
      category: 'Industrial Machinery',
    },
  });

  res.status(200).json({
    data: products,
    status: 200,
  });
};
