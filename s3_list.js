var AWS = require("aws-sdk");
AWS.config.region = "ap-northeast-2";
var s3 = new AWS.S3();
//Bucket: "ap-skintest-api-prd",
// skin-test-public
// skintest/smartbeauty/user1/

// {
//   Bucket: "ap-skintest-api-prd",
//   Prefix: "skintest/smartbeauty/user1/"
// }

s3.listObjects({
  Bucket: "skin-test-public",
  Prefix: "skintest/smartbeauty/user2/"
})
  .on("success", function handlePage(response) {
    for (var name in response.data.Contents) {
      console.log(response.data.Contents[name].Key);
    }
    if (response.hasNextPage()) {
      response
        .nextPage()
        .on("success", handlePage)
        .send();
    }
  })
  .send();
