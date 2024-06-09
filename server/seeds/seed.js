// seeds/seed.js
const sequelize = require("../config/connection");
const { User, Gym, State } = require("../models"); // Remove Picture from imports

const userData = require("./userData.json");
const gymData = require("./gymData.json");
const stateData = require("./stateData.json"); // Ensure this file exists

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // Seed States
  await State.bulkCreate(stateData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- STATES SEEDED -----\n");

  // Seed Gyms
  const gyms = await Gym.bulkCreate(gymData, {
    individualHooks: true,
    returning: true,
  });
  console.log("\n----- GYMS SEEDED -----\n");

  // Seed Users
  for (const user of userData) {
    await User.create({
      ...user,
      gym_id: gyms[Math.floor(Math.random() * gyms.length)].id,
      state_id: stateData[Math.floor(Math.random() * stateData.length)].id,
    });
  }
  console.log("\n----- USERS SEEDED -----\n");

  // Picture seeding removed

  process.exit(0);
};

seedDatabase();
