const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Define the structure of the ProductTag model
const productTagStructure = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  product_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'product',
      key: 'id',
    },
  },
  tag_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'tag',
      key: 'id',
    },
  },
};

// Define additional settings for the ProductTag model
const productTagSettings = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'product_tag',
};

// Initialize ProductTag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// Set up fields and rules for ProductTag model
ProductTag.init(productTagStructure, productTagSettings);

module.exports = ProductTag;
