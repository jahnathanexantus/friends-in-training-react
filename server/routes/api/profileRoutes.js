const router = require("express").Router();
const { User } = require("../../models");

router.get("/profile", async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ all: true, nested: true }],
      attributes: { exclude: ["password"] },
    });
    if (userData) {
      res.send(userData);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
