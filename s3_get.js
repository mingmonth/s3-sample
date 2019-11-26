var AWS = require("aws-sdk");
AWS.config.region = "ap-northeast-2";
var s3 = new AWS.S3();
//skintest/smartbeauty/user1/2019-08-28_19:54:57/00_src.jpg
var file = require("fs").createWriteStream("./downloads/user1.jpg");
// var params = {
//   Bucket: "ap-skintest-api-prd",
//   Key: "skintest/smartbeauty/user1/2019-08-28_19:54:57/00_src.jpg"
// };
//skintest/smartbeauty/user2/2019-10-14_16%3A10%3A15/00_src.jpg
//Bucket: "skin-test-public/skintest/smartbeauty",
//skintest/smartbeauty/user2/2019-10-14_16:10:15/00_src.jpg
var params = {
  Bucket: "skin-test-public",
  Key: "skintest/smartbeauty/user2/2019-10-14_16:10:15/00_src.jpg"
};
s3.getObject(params)
  .createReadStream()
  .pipe(file);
