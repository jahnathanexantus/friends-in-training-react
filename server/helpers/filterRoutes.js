const User = require("../models/User");

async function filterUser(req) {
  try {
    const currentUser = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    if (!currentUser) {
      throw new Error("Current user not found");
    }

    const usersInSameCity = await User.findAll({
      where: { city: currentUser.city },
      attributes: { exclude: ["password"] },
    });

    const sortedUsers = usersInSameCity.sort((userA, userB) => {
      let scoreA = 0;
      let scoreB = 0;

      if (userA.fitness_level === currentUser.fitness_level) scoreA++;
      if (userA.availability === currentUser.availability) scoreA++;

      if (userB.fitness_level === currentUser.fitness_level) scoreB++;
      if (userB.availability === currentUser.availability) scoreB++;

      return scoreB - scoreA;
    });

    return sortedUsers;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = filterUser;
