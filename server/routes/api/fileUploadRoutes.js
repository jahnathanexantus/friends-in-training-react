const router = require("express").Router();
const File = require("../../models/File");
const upload = require("../../utils/multer");

router.post("/upload", upload, async (req, res) => {
  // Use upload.single() if expecting only one file
  try {
    const pic = await File.create({
      image: req.file.path,
      description: req.body.description,
      userId: req.body.userId,
    });
    res.status(200).json({
      message: "File has be uploaded successfully",
      pic,
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
