// Imports
const express = require("express");
const router = express.Router();
const db = require("../db/DbConfig");
const bcrypt = require("bcrypt");

// Handling Request - Functional Approach
router.get("/", async (request, response) => {
  await response.json({
    status: 200,
    message: "OK",
  });
});

// User Registration
router.post("/register", async (request, response) => {
  // const { uname, email, passwd, date } = request.body;
  let uname = request.body.username;
  let email = request.body.email;
  let passwd = request.body.password;
  let date = request.body.regDate;

  // Password Hashing - 1. GenSalt 2. Hash
  let salt = await bcrypt.genSalt(8);
  let passHash = await bcrypt.hash(passwd, salt);

  // Storing data on a row
  await db.query(
    `INSERT INTO users (username, email, password, salt, registration_date) VALUES ('${uname}', '${email}', '${passHash}', '${salt}', '${date}');`,
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

// User data retrieval
router.get("/user/:username", async (request, response) => {
  await db.query(
    `SELECT username, email, password, registration_date FROM users WHERE username='${request.params.username};'`,
    (error, data) => {
      if (error) {
        response.json({
          status: 500,
          message: "Internal Server Error",
        });
      }
      response.json({
        status: 200,
        data: data.rows,
      });
    }
  );
});

// Deleting the User
router.delete("/user/:username", async (request, response) => {
  await db.query(
    `DELETE FROM users WHERE username='${request.params.username};'`,
    (error, dataResponse) => {
      if (error) {
        response.json({
          status: 500,
          message: "Internal Server Error",
        });
      }

      response.json({
        status: 200,
        message: "User data has been deleted",
      });
    }
  );
});

// Update username
router.put(
  "/user/:username/update-uname/:newuname",
  async (request, response) => {
    let newUname = request.params.newuname;
    await db.query(
      `UPDATE users SET username = '${newUname}' WHERE username='${request.params.username}';`,
      (error, dataResponse) => {
        if (error) {
          response.json({
            status: 500,
            message: "Internal Server Error",
          });
        }

        response.json({
          status: 200,
          message: "Successfully Updated the Username",
        });
      }
    );
  }
);

// Update User Password - ToDo
router.put(
  "/user/:username/update-passwd/:newpasswd",
  async (request, response) => {
    let newPasswd = request.params.newpasswd;

    // Hashing & Salting
    let salt = await bcrypt.genSalt(8);
    let passHash = await bcrypt.hash(newPasswd, salt);

    await db.query(
      `UPDATE users SET password='${passHash}', salt='${salt}' WHERE username='${request.params.username}';`,
      (error, dataResponse) => {
        if (error) {
          response.json({
            status: 500,
            message: "Internal Server Error",
          });
        }
        response.json({
          status: 200,
          message: "Successfully Updated Password",
        });
      }
    );
  }
);

// Update User Email - ToDo
// Login & Authorization - ToDo

// Exporting the router
module.exports = router;
