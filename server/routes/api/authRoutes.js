const router = require("express").Router();
const jwt = require("jsonwebtoken");
const passport = require("../../utils/passPort");
require("dotenv").config();

// Google OAuth login route
router.get(
  "/google", // Adjusted path to match common OAuth patterns
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
// router.get(
//   "/google/callback", // Adjusted path to match common OAuth patterns
//   passport.authenticate("google", {
//     failureRedirect: "/", // Redirect to home on failure
//     session: false, // Do not use sessions for OAuth
//   }),
//   async (req, res) => {
//     try {
//       const user = req.user;

//       // Generate a JWT token
//       const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
//         expiresIn: "1800s", // Token expiration time
//       });

//       // Save session data
//       req.session.user_id = user.id;
//       req.session.email = user.email;
//       req.session.logged_in = true;

//       // Save session and redirect
//       req.session.save((err) => {
//         if (err) {
//           return res.status(500).json({ error: "Failed to save session" });
//         }
//         // Redirect to home with JWT token
//         res.redirect(`/?token=${token}`);
//       });
//     } catch (error) {
//       console.error("Error during authentication", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   }
// );

router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/",
    session: false, // No session management
  }),
  async (req, res) => {
    try {
      const user = req.user;

      // Generate a JWT token
      const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, {
        expiresIn: "1800s",
      });

      // Redirect to home with JWT token
      res.redirect(`/?token=${token}`);
    } catch (error) {
      console.error("Error during authentication", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
);

module.exports = router;
