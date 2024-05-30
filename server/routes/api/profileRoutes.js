const express = require("express");
const { User } = require("../../models");
const setCustomCookie = require("../../helpers/setCustomCookie");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    if (!req.session.user_id) {
      throw new Error("User ID not found in session");
    }

    // console.log("Session User ID:", req.session.user_id);

    const userData = await User.findByPk(req.session.user_id, {
      include: [{ all: true, nested: true }],
      attributes: { exclude: ["password"] },
    });

    if (!userData) {
      console.log("User not found");
      return res.status(404).json({ message: "User not found" });
    }

    // console.log("User data found:", userData);

    // Set a custom cookie
    setCustomCookie(res, "profileVisited", "true");

    res.send(userData);
  } catch (err) {
    console.error("Error in profile route:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
