const router = require("express").Router();

const userRoutes = require("./userRoutes");
const resultsRoutes = require("./resultsRoutes");
const profileRoutes = require("./profileRoutes");
const gymRoutes = require("./gymRoutes");
const pictureRoutes = require("./pictureRoutes");

router.use("/gyms", gymRoutes);
router.use("/users", userRoutes);
router.use("/results", resultsRoutes);
router.use("/profile", profileRoutes);
router.use("/picture", pictureRoutes);

module.exports = router;
