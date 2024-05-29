const User = require("../models/User");

// async function filterUser(user) {
//   try {
//     const currentUser = await User.findByPk(req.session.user_id, {
//       include: [{ all: true, nested: true }],
//       attributes: { exclude: ["password"] },
//     });

//     const userData = await User.findAll({
//       attributes: { exclude: ["password"] },
//     });

//     userData.filter((user) => {
//       if (
//         user.city === currentUser.city ||
//         user.fitness_level === currentUser.fitness_level ||
//         user.availability === currentUser.availability
//       ) {
//         return user;
//       }
//     });
//   } catch (err) {}
// }

async function filterUser(req) {
  try {
    // Get the current user from the session
    const currentUser = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    if (!currentUser) {
      throw new Error("Current user not found");
    }

    // Get all users
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });

    // Filter users based on the current user's city (mandatory)
    // and fitness level or availability (optional)
    const filteredUsers = userData.filter((user) => {
      return (
        user.city === currentUser.city &&
        (user.fitness_level === currentUser.fitness_level ||
          user.availability === currentUser.availability)
      );
    });

    return filteredUsers;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

module.exports = filterUser;
