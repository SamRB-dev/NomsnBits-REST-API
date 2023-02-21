// Imports
const bodyParser = require("body-parser");
const express = require("express");
const apiRouter = require("./routes/api");

// Entry Point
const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/api", apiRouter);

// All Routes
app.get("/", async (request, response) => {
  await response.status(200).json({
    status: 200,
    name: "Noms&Bits API v1.0",
  });
});

// Starting the Server
try {
  app.listen(5000, () => {
    console.log("Server Started......");
  });
} catch (err) {
  console.log(err.message);
}
