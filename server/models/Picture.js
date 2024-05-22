const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Picture extends Model {}

Picture.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "User",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "picture",
  }
);

module.exports = Picture;
