const express = require("express");
const { happy,getEmployees } = require("../controller/hcontroller");

const target = express.Router();

target.post("/iv", happy);
target.get("/iv", getEmployees);

module.exports = target;
