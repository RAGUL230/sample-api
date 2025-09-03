const express = require("express");
const {salary} = require("../controller/scontroller");

const saving = express.Router();

saving.post("/iv2", salary);


module.exports = saving;
