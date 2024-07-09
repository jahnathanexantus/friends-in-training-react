const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Follow extends Model {}

Follow.init(
  {
    followerId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    followingId: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "follow",
  }
);

module.exports = Follow;
