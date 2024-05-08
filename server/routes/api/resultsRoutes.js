const router = require("express").Router();
const { User } = require("../../models");
const session = require("express-session");
const authenticateToken = require("../../utils/jwt");

// route to display all users in database at api/results
router.get("/", authenticateToken, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ["password"] },
    });
    res.send(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: [{ all: true, nested: true }],
      attributes: { exclude: ["password"] },
    });
    res.send(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
