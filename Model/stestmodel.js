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

module.exports = {fancname};
