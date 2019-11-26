const express = require("express");
const router = express.Router();
const async = require("async");
const Upload = require("../service/UploadService");

router.get("/", (req, res) => {
  //res.render("index", { title: "Express" });
  res.send("Hello world!");
});
