const router = require("express").Router();

const userRoutes = require("./userRoutes");
const resultsRoutes = require("./resultsRoutes");
const profileRoutes = require("./profileRoutes");
const gymRoutes = require("./gymRoutes");
const fileUploadRoutes = require("./fileUploadRoutes");
const stateRoutes = require("./stateRoutes");
const followRoutes = require("./followRoutes");
const authRoutes = require("./authRoutes");

router.use("/gyms", gymRoutes);
router.use("/users", userRoutes);
router.use("/results", resultsRoutes);
router.use("/profile", profileRoutes);
router.use("/uploads", fileUploadRoutes);
router.use("/state", stateRoutes);
router.use("/follow", followRoutes);
router.use("/auth", authRoutes);

module.exports = router;
