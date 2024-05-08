const router = require("express").Router();
const { User } = require("../../models");
const session = require("express-session");
const jwt = require("jsonwebtoken");

// route to create new user
// need to link this with sign up modal still
router.post("/", async (req, res) => {
  try {
    const userData = await User.create({
      first_name: req.body.firstName,
      last_name: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      state: req.body.state,
      fitness_level: req.body.fitnessLevel,
      availability: req.body.availability,
      gender: req.body.gender,
      gym_id: req.body.gymId,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.logged_in = true;
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Assuming your User model is imported properly

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
    console.log("this is my token ", token);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.email = userData.email;
      req.session.logged_in = true;
      res.status(200).json({
        message: "User Logged in Successfully",
        token,
      });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
