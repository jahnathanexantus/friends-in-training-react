const router = require("express").Router();
const { User } = require("../../models");
const session = require("express-session");

// route to display all users in database at api/results
router.get("/", async (req, res) => {
  console.log("this is who currently is using the app", req.session.email);
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    // const users = userData.map((user) => user.get({ plain: true }));
    res.send(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.params.id, {
      include: [{ all: true, nested: true }],
      attributes: { exclude: ["password"] },
    });
    // const users = userData.get({ plain: true });
    res.send(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
