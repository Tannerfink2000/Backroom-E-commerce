const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection.js');

// Define the structure of the Tag model
const tagStructure = {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  tag_name: {
    type: DataTypes.STRING,
  },
};

// Define additional settings for the Tag model
const tagSettings = {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'tag',
};

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// Set up fields and rules for Tag model
Tag.init(tagStructure, tagSettings);

module.exports = Tag;
