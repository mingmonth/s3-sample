const express = require("express");
const app = express();

const router = require("./routes/upload.js");
app.use("/", router);

// Create a Server
const server = app.listen(8080, () => {
  console.log("App listening at 8080");
});
