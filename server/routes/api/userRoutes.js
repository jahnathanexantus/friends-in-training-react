const router = require("express").Router();
const { User } = require("../../models");
const session = require("express-session");
const jwt = require("jsonwebtoken");

// route to create new user
// need to link this with sign up modal still
router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create({
      // image: req.file.path,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      city: req.body.city,
      state: req.body.state,
      fitness_level: req.body.fitness_level,
      availability: req.body.availability,
      gender: req.body.gender,
      gym_id: req.body.gymId,
    });

    const token = jwt.sign(
      { userId: userData.id, email: userData.email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({ userData, token });
  } catch (err) {
    res.status(400).json(err);
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
