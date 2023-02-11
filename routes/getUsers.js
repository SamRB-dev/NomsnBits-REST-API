// Imports
const express = require("express");
const router = express.Router();

// Handling Request - Functional Approach
router.get("/",(request,response) => {
    response.send("Users");
});

// Exporting the router
module.exports = router;