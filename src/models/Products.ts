import sequelize from '../db/connection';
import { Model, DataTypes } from 'sequelize';

class Product extends Model {
  declare productId: string;
  declare title: string;
  declare category: string;
  declare minPromotionPrice: string;
  declare salesCount: string;
  declare transactionLevel: string;
  declare subject: string;
  declare responseRate: string;
  declare companyName: string;
  declare discount: string;
  declare videoId: string;
  declare moq: string;
  declare promotionMoq: string;
  declare freeShipping: boolean;
  declare price: string;
  declare warranty: boolean;
  declare freightPrice: string;
  declare image: string;
  declare images: object[];
  declare isAssessedSupplierPro: boolean;
  declare productCertificates: string;
  declare p4p: boolean;
  declare tradeAssurance: boolean;
  declare clickParam: string;
  declare detailWap: string;
  declare companyId: string;
  declare traceInfo: object;
  declare maxPromotionPrice: string;
  declare minPrice: string;
  declare maxPrice: string;
  declare totalEmployees: number;
  declare goldSupplierYears: string;
  declare afterService: boolean;
  declare realCtrParam: string;
  declare onlineCustomizeMinShippingDate: string;
  declare eurl: string;
  declare promotionPrice: string;
  declare contactSupplierLink: string;
  declare customization: boolean;
  declare aliMemberId: string;
  declare companyUrl: string;
  declare firstCategoryId: string;
  declare productSellingPoint2dCustomizationText: string;
  declare transactionGmv6Months: string;
  declare supportSevenDaysSample: boolean;
  declare transactionCount6Months: string;
  declare shippingTime: string;
  declare goldSupplier: boolean;
  declare companyStar: string;
  declare views: string;
  declare createDate: string;
  declare trackInfo: string;
  declare moqUnit: string;
  declare companyLogo: string;
  declare interveneCompanyVideoPoster: string;
  declare rts: boolean;
  declare assessedSupplier: boolean;
  declare companyProfileUrl: string;
  declare supportProduceSample: boolean;
  declare companyAbility: object[];
  declare atomoTags: string[];
  declare industryTags: object[];
  declare rankId: string;
}

Product.init(
  {
    productId: {
      type: DataTypes.TEXT,
      primaryKey: true,
      allowNull: false,
    },
    rankId: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    minPromotionPrice: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    salesCount: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    transactionLevel: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    subject: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    responseRate: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    companyName: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    discount: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    videoId: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    moq: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    promotionMoq: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    freeShipping: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    warranty: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    freightPrice: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    images: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    isAssessedSupplierPro: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    productCertificates: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    p4p: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    tradeAssurance: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    clickParam: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    detailWap: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    companyId: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    traceInfo: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    maxPromotionPrice: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    minPrice: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    maxPrice: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    totalEmployees: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    goldSupplierYears: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    afterService: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    realCtrParam: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    onlineCustomizeMinShippingDate: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    eurl: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    promotionPrice: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    contactSupplierLink: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    customization: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    aliMemberId: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    companyUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    firstCategoryId: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    productSellingPoint2dCustomizationText: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    transactionGmv6Months: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    supportSevenDaysSample: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    transactionCount6Months: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    shippingTime: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    goldSupplier: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    companyStar: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    views: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    createDate: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    trackInfo: {
      type: DataTypes.TEXT,
      defaultValue: '',
    },
    moqUnit: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    companyLogo: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    interveneCompanyVideoPoster: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rts: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    assessedSupplier: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    companyProfileUrl: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    supportProduceSample: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    companyAbility: {
      type: DataTypes.JSONB,
      defaultValue: [],
    },
    atomoTags: {
      type: DataTypes.JSONB,
      defaultValue: [],
    },
    industryTags: {
      type: DataTypes.JSONB,
      defaultValue: [],
    },
  },
  {
    sequelize, // This must reference the Sequelize instance
    tableName: 'Products',
    timestamps: true,
  },
);

export default Product;
