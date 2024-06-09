// models/index.js
const User = require("./User");
const Gym = require("./Gym");
const Picture = require("./Picture");
const State = require("./State");

Gym.hasMany(User, {
  foreignKey: "gym_id",
});

User.belongsTo(Gym, {
  foreignKey: "gym_id",
});

User.hasMany(Picture, {
  foreignKey: "userId",
});

Picture.belongsTo(User, {
  foreignKey: "userId",
});

// Define State and User relationships
State.hasMany(User, {
  foreignKey: "state_id",
});

User.belongsTo(State, {
  foreignKey: "state_id",
});

module.exports = { User, Gym, Picture, State };
