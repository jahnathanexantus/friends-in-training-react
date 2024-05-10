const router = require("express").Router();
const Gym = require("../../models/Gym");
const authenticateToken = require("../../utils/jwt");

router.get("/", authenticateToken, async (req, res) => {
  try {
    const gymData = await Gym.findAll();
    res.send(gymData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
