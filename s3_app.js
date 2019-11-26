var express = require("express");
//var formidable = require("formidable");
var AWS = require("aws-sdk");
AWS.config.region = "ap-northeast-2";
var app = express();
app.get("/s3", function(req, res) {
  console.log(1);
  res.send("Hello s3");
});
app.get("/form", function(req, res) {
  var output = `
<html>
<body>
    <form enctype="multipart/form-data" method="post" action="upload_receiver">
        <input type="file" name="userfile">
        <input type="submit">
    </form>
</body>
</html>
    `;
  res.send(output);
});

app.listen(4500, function() {
  console.log("Conntect 4500 port");
});
