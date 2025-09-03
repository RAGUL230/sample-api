const express = require("express");
const {salary, deleteSalary} = require("../controller/scontroller");

const saving = express.Router();

saving.post("/iv2", salary);
saving.delete("/iv2", deleteSalary);

module.exports = saving;
