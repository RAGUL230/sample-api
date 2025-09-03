const { fancname, deleteSalaryRecordById } = require("../Model/stestmodel")

async function salary(req,res){
    console.log("Accepted")
    const {employee_id, salary_amount, pay_date } = req.body
    try {
        
        const result = await fancname(employee_id, salary_amount, pay_date)



        res.status(200).json({
            success: true,
            data : result
        })
    } catch (error) {
        res.status(500).json({
            success : false,
            message:"data not found"
        })
    }

}

async function deleteSalary(req, res) {
    try {
        // Get the salary_id from the URL parameters (e.g., from /iv/salary/10)
        const { id } = req.params;

        const result = await deleteSalaryRecordById(id);

        // Check if any row was actually deleted
        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `Salary record with ID ${id} not found.`
            });
        }

        res.status(200).json({
            success: true,
            message: `Salary record with ID ${id} deleted successfully.`
        });

    } catch (error) {
        console.error("Error in deleteSalary controller:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while deleting the salary record."
        });
    }
}

module.exports={salary,deleteSalary}
