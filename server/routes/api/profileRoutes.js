const router = require("express").Router();
const { User } = require("../../models/User");

router.get("/profile", async (req, res) => {
  console.log("this is who profile that is showing up", req.session.email);
  if (req.session.logged_in) {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk(req.session.user_id, {
        include: [{ all: true, nested: true }],
        attributes: { exclude: ["password"] },
      });
      if (userData) {
        res.json(userData);
      } else {
        res.status(404).json({ message: "User not found" });
      }
      // Additional logic for a logged-in user's profile
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json({ message: "Unauthorized" });
    // Handling unauthorized access for non-logged-in users
  }
});

module.exports = router;
