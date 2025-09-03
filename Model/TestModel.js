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

module.exports = {funcname,getAllEmployees};


