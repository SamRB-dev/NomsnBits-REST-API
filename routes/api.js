// Imports
const express = require("express");
const router = express.Router();
const db = require("../db/DbConfig");

// Handling Request - Functional Approach
router.get("/", async (request, response) => {
  await response.json({
    status: 200,
    message: "Users",
  });
});

router.get("/users", async (request, response) => {
  await db.query("SELECT * FROM users", (error, data) => {
    if (error) throw error.message;
    response.json({
      status: 200,
      data: data,
    });
  });
});

// Exporting the router
module.exports = router;
