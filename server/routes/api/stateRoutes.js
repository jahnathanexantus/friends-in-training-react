const router = require("express").Router();
const State = require("../../models/State");

router.get("/", async (req, res) => {
  try {
    const stateData = await State.findAll();
    res.send(stateData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
