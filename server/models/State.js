// models/State.js
const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class State extends Model {}

State.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING, // Ensure correct spelling and type here
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false, // Correct the spelling here
    freezeTableName: true,
    underscored: true,
    modelName: "state", // Match this with the table name in associations
  }
);

module.exports = State;
