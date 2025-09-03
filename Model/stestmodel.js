const db = require("../config/db")

function fancname(salary_id, employee_id, salary_amount, pay_date) {
    const query = `INSERT INTO employee.employee_salary(employee_id, salary_amount, pay_date) VALUES (?,?,?)`
;

    try {
        const result = db.query(query,[salary_id, employee_id, salary_amount, pay_date])
        return result.rows
    } catch (error) {
        return 
    }
}

async function deleteSalaryRecordById(salary_id) {
    const query = `DELETE FROM employee.employee_salary WHERE salary_id = 3`;

    try {
        // We pass the salary_id to the query
        const [result] = await db.query(query, [salary_id]);
        return result;
    } catch (error) {
        console.error("Database error in deleteSalaryRecordById:", error.sqlMessage);
        throw error;
    }
}
module.exports = {fancname,deleteSalaryRecordById};
