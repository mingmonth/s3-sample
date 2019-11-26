"use strict";

const s3 = require("./s3");

// describe("s3 test", () => {
//   it("upload", async () => {
//     await s3.upload(
//       "http://ticketimage.interpark.com/Play/image/large/18/18009670_p.gif"
//     );
//   });
// });

async function s3UploadTest() {
  await s3.upload(
    "https://resmartbeauty.amorepacific.com/uploadFile/mobile/aws/upload/fcf42eff-ffd7-473f-937b-e5595e937a52.jpg"
  );
}

async function s3DownloadTest() {
  await s3.download("5490a7e42d746820436df3b013e7d7cf");
}

//s3UploadTest();

async function s3UploadTest2() {
  await s3.upload2("smarthome_log.png", "images/", (err, result) => {
    callback(err, result);
  });
}

//s3DownloadTest();
//s3UploadTest2();
