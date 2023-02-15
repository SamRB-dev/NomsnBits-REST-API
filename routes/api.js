// Imports
const express = require("express");
const router = express.Router();
const db = require("../db/DbConfig");

// Handling Request - Functional Approach
router.get("/", async (request, response) => {
  await response.json({
    status: 200,
    message: "OK",
  });
});

router.post("/register", async (request, response) => {
  // const { uname, email, passwd, date } = request.body;
  let uname = request.body.username;
  let email = request.body.email;
  let passwd = request.body.password;
  let date = request.body.regDate;
  await db.query(
    `INSERT INTO users (username, email, password, registration_date) VALUES ('${uname}', '${email}', '${passwd}', '${date}');`,
    (error, dataResponse) => {
      if (error) {
        console.log(error.message);
        response.json({
          status: 500,
          message: "Internal Server Error",
        });
      }

      response.json({
        status: 200,
        message: "success",
      });
    }
  );
});

router.get("/users", async (request, response) => {
  await db.query(
    "SELECT user_id, username, email, password, registration_date FROM users",
    (error, data) => {
      if (error) {
        response.json({
          status: 500,
          message: "Internal Server Error",
        });
      }
      response.json({
        status: 200,
        data: data,
      });
    }
  );
});

// Exporting the router
module.exports = router;