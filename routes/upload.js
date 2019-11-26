const express = require("express");
const router = express.Router();
const AWS = require("aws-sdk");
const multer = require("multer");
const storage = multer.memoryStorage();
// const storage = multer.diskStorage({
//   destination: function(req, file, cb) {
//     cb(null, "uploads/");
//   },
//   filename: function(req, file, cb) {
//     cb(null, file.originalname);
//   }
// });
const upload = multer({ storage: storage });

const s3Client = new AWS.S3({
  accessKeyId: "AKIASXTKYERWIHAEFXEL",
  secretAccessKey: "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",
  region: "ap-northeast-2"
});

const uploadParams = {
  Bucket: "skin-test-public",
  Key: "", // pass key
  Body: null // pass file body
};

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/api/file/upload", upload.single("file"), (req, res) => {
  const params = uploadParams;

  console.log(req.file);

  uploadParams.Key = req.file.originalname;
  uploadParams.Body = req.file.buffer;
  //uploadParams.Body = req.file.path;

  s3Client.upload(params, (err, data) => {
    if (err) {
      res.status(500).json({ error: "Error -> " + err });
    }
    res.json({
      message: "File uploaded successfully",
      filename: req.file.originalname,
      location: data.Location
    });
  });
});

module.exports = router;
