const router = require('express').Router();
const {User} = require("../../models/User")

router.get('/profile', async (req, res) => {
    try {
      // Find the logged in user based on the session ID
      const userData = await User.findByPk( {
        include: [{ all: true, nested: true }],
        attributes: { exclude: ['password'] }
      });
      const users = userData.get({ plain: true });
      res.send(users)
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;