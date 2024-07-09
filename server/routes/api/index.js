const router = require("express").Router();

const userRoutes = require("./userRoutes");
const resultsRoutes = require("./resultsRoutes");
const profileRoutes = require("./profileRoutes");
const gymRoutes = require("./gymRoutes");
const pictureRoutes = require("./pictureRoutes");
const stateRoutes = require("./stateRoutes");
const followRoutes = require("./followRoutes");

router.use("/gyms", gymRoutes);
router.use("/users", userRoutes);
router.use("/results", resultsRoutes);
router.use("/profile", profileRoutes);
router.use("/picture", pictureRoutes);
router.use("/state", stateRoutes);
router.use("/follow", followRoutes);

module.exports = router;
