var express = require("express");
var app = express();
var AWS = require("aws-sdk");
AWS.config.region = "ap-northeast-2";
var ec2 = new AWS.EC2();

app.get("/", function(req, res) {
  res.send("Hello World!");
});

app.get("/ec2", function(req, res) {
  ec2.describeInstances({}, function(err, data) {
    res.json(data);
  });
});

app.listen(4500, function() {
  console.log("Conntect 4500 port");
});
