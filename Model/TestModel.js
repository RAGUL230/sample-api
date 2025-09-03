const db = require("../config/db")

function funcname(id, name, phone, email, city, department) {
    const query = `INSERT INTO employee.employeedetails( name, phone, email, city, department) VALUES (?,?,?,?,?)`
;

    try {
        const result = db.query(query,[id, name, phone, email, city, department])
        return result.rows
    } catch (error) {
        return 
    }
}
async function getAllEmployees() {
    const query = `SELECT * FROM employee.employeedetails`;
    try {
        // For a SELECT query, the result (the rows) is the first element in the array
        const [rows] = await db.query(query);
        return rows;
    } catch (error) {
        console.error("Error fetching employees from database:", error);
        throw error;
    }
}
async function getEmployeeById(id) {
    const query = `SELECT * FROM employee.employeedetails WHERE id = ?`;
    const [rows] = await db.query(query, [id]);
    return rows[0]; // Return the first object found, or undefined if not found
}

async function updateEmployeeById(id, name, phone, email, city, department) {
    const query = `UPDATE employee.employeedetails SET name = ?, phone = ?, email = ?, city = ?, department = ? WHERE id = 1`;
    const [result] = await db.query(query, [name, phone, email, city, department, id]);
    return result;
}

// Handles PATCH - Updates part of an employee record
async function patchEmployeeById(id, updates) {
    // Get the field names from the request body (e.g., ['city', 'phone'])
    const fields = Object.keys(updates);
    // Get the values from the request body (e.g., ['Chennai', '1122334455'])
    const values = Object.values(updates);

    // Create the 'SET' part of the SQL query dynamically
    // This will create something like: "SET city = ?, phone = ?"
    const setClause = fields.map(field => `${field} = ?`).join(', ');

    const query = `UPDATE employee.employeedetails SET ${setClause} WHERE id = 3`;

    // The final values array will include all the update values, plus the id at the end for the WHERE clause
    const [result] = await db.query(query, [...values, id]);
    return result;
}
async function createAttendanceRecord(attendanceData) {
    // Destructure the data from the incoming object
    // Set default values for optional fields like check_out_time, status, etc.
    const {
        employee_id,
        attendance_date,
        check_in_time = null, // Can be null if status is 'On Leave'
        check_out_time = null,
        status = 'Present', // Default status is 'Present'
        notes = null
    } = attendanceData;

    const query = `
        INSERT INTO employee.attendance 
        (employee_id, attendance_date, check_in_time, check_out_time, status, notes) 
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const [result] = await db.query(query, [
        employee_id,
        attendance_date,
        check_in_time,
        check_out_time,
        status,
        notes
    ]);

    return result;
}
async function getAttendenceById(id) {
    const query = `SELECT * FROM employee.attendance WHERE employee_id = ?`;
    const [rows] = await db.query(query, [id]);
    return rows[0]; // Return the first object found, or undefined if not found
}



module.exports = {funcname,getAllEmployees,getEmployeeById,updateEmployeeById,patchEmployeeById,createAttendanceRecord,getAttendenceById};


