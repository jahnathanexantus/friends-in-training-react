// models/index.js
const User = require("./User");
const Gym = require("./Gym");
const Picture = require("./Picture");
const State = require("./State");
const Follow = require("./Follow");
const Video = require("./Video");

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

User.hasMany(Follow, {
  foreignKey: "followerId",
});

User.hasMany(Follow, {
  foreignKey: "followingId",
});

Follow.belongsTo(User, {
  foreignKey: "followerId",
});

Follow.belongsTo(User, {
  foreignKey: "followingId",
});

User.hasMany(Video, {
  foreignKey: "userId",
});
Video.belongsTo(User, {
  foreignKey: "userId",
});
module.exports = { User, Gym, Picture, State, Follow };
