const express = require("express");
const { happy,getEmployees, updateEmployee, patchEmployee, getEmployee, addAttendance, getAttendance, updateAttendanceNotes } = require("../controller/hcontroller");

const target = express.Router();

target.post("/iv", happy);
target.get("/iv", getEmployees);
target.get("/iv/:id", getEmployee);
target.put("/iv", updateEmployee);
target.patch("/iv", patchEmployee);
target.post("/iv3", addAttendance);
target.get("/iv3/:id", getAttendance);
target.patch("/iv3/:id", updateAttendanceNotes);

module.exports = target;
