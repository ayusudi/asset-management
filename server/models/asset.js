'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Asset.belongsTo(models.Category, { foreignKey: "CategoryId" })
      Asset.belongsTo(models.User, { foreignKey: "UserId" })
      Asset.belongsTo(models.User, { foreignKey: "AssignedToId" })
    }
  }
  Asset.init({
    assetName: DataTypes.STRING,
    description: DataTypes.TEXT,
    cost: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    status: DataTypes.STRING,
    currentLocation: DataTypes.STRING,
    serial: DataTypes.STRING,
    CategoryId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    AssignedToId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};