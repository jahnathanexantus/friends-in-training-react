const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const { User } = require("../models");
require("dotenv").config();

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:3000/api/auth/google/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Find the user by OAuth ID
        let user = await User.findOne({ where: { oauthId: profile.id } });

        // If user does not exist, create a new user
        if (!user) {
          user = await User.create({
            oauthId: profile.id,
            username: profile.displayName,
            email: profile.emails[0].value,
          });
        }

        return done(null, user);
      } catch (err) {
        console.error("Error during authentication", err);
        return done(err);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findByPk(id);
    done(null, user);
  } catch (err) {
    console.error("Error deserializing user", err);
    done(err);
  }
});

module.exports = passport;
