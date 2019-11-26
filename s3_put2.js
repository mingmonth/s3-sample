var AWS = require("aws-sdk");
var fs = require("fs");
//AWS.config.region = "ap-northeast-2";
const path = require("path");
//AWS.config.loadFromPath(path.join(__dirname, "config.json"));
var s3 = new AWS.S3();
var param = {
  Bucket: "skin-test-public/skintest/upload",
  Key: "111111.jpg",
  ACL: "public-read",
  Body: fs.createReadStream("111111.jpg"),
  ContentType: "image/png"
};
s3.upload(param, function(err, data) {
  console.log(err);
  console.log(data);
});
