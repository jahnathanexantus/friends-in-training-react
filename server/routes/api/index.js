const router = require("express").Router();

const userRoutes = require("./userRoutes");
const resultsRoutes = require("./resultsRoutes");
const profileRoutes = require("./profileRoutes");

router.use("/users", userRoutes);
router.use("/results", resultsRoutes);
router.use("/profile", profileRoutes);

module.exports = router;
