// models/index.js
const User = require("./User");
const Gym = require("./Gym");
const FileUpload = require("./FileUpload");
const State = require("./State");
const Follow = require("./Follow");

Gym.hasMany(User, {
  foreignKey: "gym_id",
});

User.belongsTo(Gym, {
  foreignKey: "gym_id",
});

User.hasMany(FileUpload, {
  foreignKey: "userId",
});

FileUpload.belongsTo(User, {
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

module.exports = { User, Gym, FileUpload, State, Follow };
