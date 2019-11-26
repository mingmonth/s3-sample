"use strict";

const AWS = require("aws-sdk");
const path = require("path");
AWS.config.loadFromPath(path.join(__dirname, "config.json"));
const S3 = new AWS.S3();
const md5 = require("md5");
const request = require("request-promise");
const bucket = "skin-test-public";

//var params = { Bucket: "skin-test-public", Key: "logo.png" };

class AwsS3 {
  async upload(url) {
    const params = {};
    params.Key = `image/${md5(url)}.jpg`;
    params.Bucket = bucket;
    params.Body = await request(url);
    params.contentType = "image/jpg";

    S3.upload(params, function(err, data) {
      console.log(err);
      console.log(data);
    });
  }

  //   async upload2(files, key, callback) {
  //     console.log(files);
  //     const params = {};
  //     params.Key = key + files.name;
  //     params.Bucket = bucket;
  //     params.Body = require("fs").createReadStream(files.path);

  //     S3.upload(params, (err, result) => {
  //       callback(err, result);
  //     });
  //   }

  async download(filename) {
    const params = {};
    params.Key = `image/${filename}.jpg`;
    params.Bucket = bucket;

    var file = require("fs").createWriteStream(filename);

    S3.getObject(params)
      .createReadStream()
      .pipe(file);
  }
}

module.exports = new AwsS3();
