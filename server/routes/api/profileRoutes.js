const router = require("express").Router();
const { User } = require("../../models");

router.get("/profile", async (req, res) => {
  console.log("this is who profile that is showing up", req.session.email);
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      include: [{ all: true, nested: true }],
      attributes: { exclude: ["password"] },
    });
    if (userData) {
      res.send(userData);
    } else {
      res.status(404).json({ message: "User not found" });
    }
    // Additional logic for a logged-in user's profile
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
