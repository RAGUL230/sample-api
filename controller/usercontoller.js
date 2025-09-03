// routes/helloRoutes.js
const express = require("express");
const router = express.Router();
const { sayHi } = require("../controllers/helloController");

// GET /hi
router.get("/hi", sayHi);

module.exports = router;
