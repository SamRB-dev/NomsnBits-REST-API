// Imports
const bodyParser = require("body-parser");
const express = require("express");
require("dotenv").config();
const usersRouter = require("./routes/getUsers");

// Constants
const PORT = process.env.PORT;

// Entry Point
const app = express();

// Middleware
app.use(bodyParser.json());
app.use("/users",usersRouter);

// All Routes
app.get("/", (request, response) => {
  response.send("Noms&Bits API v1.0");
});

// Starting the Server
try {
  app.listen(PORT, () => {
    console.log("Server Started......");
  });
} catch (err) {
  console.log(err.message);
}
