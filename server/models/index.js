const User = require("./User");
const Gym = require("./Gym");
const Picture = require("./Picture");

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

module.exports = { User, Gym, Picture };
