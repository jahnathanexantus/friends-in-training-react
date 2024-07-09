const router = require("express").Router();
const Follow = require("../../models/Follow");
const User = require("../../models/User");

router.post("/follow", async (req, res) => {
  const { followerId, followingId } = req.body;

  if (!followerId || !followingId) {
    return res
      .status(400)
      .json({ error: "followerId and followingId are required" });
  }

  if (followerId === followingId) {
    return res.status(400).json({ error: "User cannot follow themselves" });
  }

  try {
    const follower = await User.findByPk(followerId);
    const following = await User.findByPk(followingId);

    if (!follower || !following) {
      return res.status(404).json({ error: "User not found" });
    }

    const followData = await Follow.create({ followerId, followingId });
    res.status(201).json({ message: "User followed successfully", followData });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while trying to follow the user" });
  }
});

router.post("/unfollow", async (req, res) => {
  const { followerId, followingId } = req.body;

  if (!followerId || !followingId) {
    return res
      .status(400)
      .json({ error: "followerId and followingId are required" });
  }

  try {
    const followData = await Follow.findOne({
      where: {
        followerId,
        followingId,
      },
    });

    if (!followData) {
      return res.status(404).json({ error: "Follow relationship not found" });
    }

    await followData.destroy();
    res.status(200).json({ message: "User unfollowed successfully" });
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while trying to unfollow the user" });
  }
});

module.exports = router;
