const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Check file type and set destination folder accordingly
    if (file.mimetype.startsWith("image/")) {
      cb(null, "images"); // Store images in the 'images' folder
    } else if (file.mimetype.startsWith("video/")) {
      cb(null, "videos"); // Store videos in the 'videos' folder
    } else {
      cb(new Error("Invalid file type"), false); // Reject unsupported file types
    }
  },
  filename: (req, file, cb) => {
    // Save file with a unique name using timestamp
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: "10000000" }, // Set a larger file size limit for videos
  fileFilter: (req, file, cb) => {
    // Allowable file types (images and videos)
    const fileTypes = /jpeg|jpg|png|gif|mp4|mkv|avi/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(
      path.extname(file.originalname).toLowerCase()
    );

    if (mimeType && extname) {
      return cb(null, true); // Allow the file
    }
    cb(new Error("Please upload a valid image or video file")); // Reject unsupported files
  },
}).single("file"); // Use .array("files", 3) if multiple files are needed

module.exports = upload;
