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
// const User = require("../models/User");

// async function filterUser(req) {
//   try {
//     // Get the current user from the session
//     const currentUser = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ["password"] },
//     });

//     if (!currentUser) {
//       throw new Error("Current user not found");
//     }

//     // Get all users in the same city
//     const filteredUsers = await User.findAll({
//       where: { city: currentUser.city },
//       attributes: { exclude: ["password"] },
//     });

//     return filteredUsers;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// }

// module.exports = filterUser;
// const { Op } = require("sequelize");
// const User = require("../models/User");

// async function filterUser(req) {
//   try {
//     // Get the current user from the session
//     const currentUser = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ["password"] },
//     });

//     if (!currentUser) {
//       throw new Error("Current user not found");
//     }

//     // Build the where clause dynamically
//     const whereClause = {
//       city: currentUser.city,
//     };

//     if (currentUser.fitness_level) {
//       whereClause.fitness_level = currentUser.fitness_level;
//     }

//     if (currentUser.availability) {
//       whereClause.availability = currentUser.availability;
//     }

//     // Get all users matching the criteria
//     const filteredUsers = await User.findAll({
//       where: {
//         ...whereClause,
//         [Op.or]: [
//           { fitness_level: currentUser.fitness_level },
//           { availability: currentUser.availability },
//         ],
//       },
//       attributes: { exclude: ["password"] },
//     });

//     return filteredUsers;
//   } catch (err) {
//     console.error(err);
//     throw err;
//   }
// }

// module.exports = filterUser;
