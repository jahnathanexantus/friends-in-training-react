const router = require("express").Router();
const { User } = require("../models");
const withAuth = require("../utils/auth");
const jwt = require("jsonwebtoken");
const passport = require("../utils/passPort");
const setCustomCookie = require("../helpers/setCustomCookie");
require("dotenv").config();

router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }

    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      return res
        .status(400)
        .json({ message: "Incorrect email or password, please try again" });
    }

    const token = jwt.sign({ email: userData.email }, process.env.JWT_SECRET, {
      expiresIn: "1800s",
    });
    setCustomCookie(res, "profileVisited", "true");

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.logged_in = true;
      res.status(200).json({
        message: "User Logged in Successfully",
        token,
        user: { id: userData.id, email: userData.email },
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
