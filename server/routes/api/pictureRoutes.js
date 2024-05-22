const router = require("express").Router();
const Picture = require("../../models/Picture");
const upload = require("../../utils/multer");

router.post("/upload", upload, async (req, res) => {
  // Use upload.single() if expecting only one file
  try {
    const pic = await Picture.create({
      image: req.file.path,
      description: req.body.description,
      userId: req.body.userId,
    });
    res.status(200).json({
      message: "picture has be uploaded successfully",
      pic,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
