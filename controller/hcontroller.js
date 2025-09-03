const { funcname ,getAllEmployees,getEmployeeById,updateEmployeeById,patchEmployeeById, createAttendanceRecord,getAttendenceById} = require("../Model/TestModel")

async function happy(req,res){
    console.log("Accepted")
    const { name, phone, email, city, department } = req.body
    try {
        
        const result = await funcname( name, phone, email, city, department)



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

async function getEmployees(req, res) {
    try {
        const employees = await getAllEmployees();

        res.status(200).json({
            success: true,
            message: "Employees fetched successfully!",
            data: employees
        });

    } catch (error) {
        console.error("Error in getEmployees controller:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while fetching employees."
        });
    }
}
async function getEmployee(req, res) {
    try {
        const { id } = req.params;
        const employee = await getEmployeeById(id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: `Employee with ID ${id} not found.`
            });
        }

        res.status(200).json({
            success: true,
            data: employee
        });
    } catch (error) {
        console.error("Error in getEmployee controller:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching employee."
        });
    }
}
async function updateEmployee(req, res) {
    try {
        const { id } = req.params;
        const { name, phone, email, city, department } = req.body;

        if (!name || !phone || !email || !city || !department) {
            return res.status(400).json({
                success: false,
                message: "Please provide all fields in the body to update the employee."
            });
        }

        const result = await updateEmployeeById(id, name, phone, email, city, department);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `Employee with ID ${id} not found.`
            });
        }

        res.status(200).json({
            success: true,
            message: `Employee with ID ${id} updated successfully.`
        });

    } catch (error) {
        console.error("Error in updateEmployee controller:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while updating the employee."
        });
    }
}

// Handles PATCH /iv/:id - Updates part of an employee record
async function patchEmployee(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;

        if (Object.keys(updates).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Please provide at least one field to update."
            });
        }

        const result = await patchEmployeeById(id, updates);

        if (result.affectedRows === 0) {
            return res.status(404).json({
                success: false,
                message: `Employee with ID ${id} not found.`
            });
        }

        res.status(200).json({
            success: true,
            message: `Employee with ID ${id} patched successfully.`
        });

    } catch (error) {
        console.error("Error in patchEmployee controller:", error);
        res.status(500).json({
            success: false,
            message: "An error occurred while patching the employee."
        });
    }
}
async function addAttendance(req, res) {
    try {
        const attendanceData = req.body;

        // Basic validation to ensure required fields are present
        if (!attendanceData.employee_id || !attendanceData.attendance_date) {
            return res.status(400).json({
                success: false,
                message: "employee_id and attendance_date are required."
            });
        }

        // Call the model function to insert the data
        const result = await createAttendanceRecord(attendanceData);

        // Send a success response
        res.status(201).json({
            success: true,
            message: "Attendance record created successfully!",
            data: { insertId: result.insertId }
        });

    } catch (error) {
        // Log the error and send a server error response
        console.error("Error in addAttendance controller:", error);
        res.status(500).json({
            success: false,
            message: "Server error while creating attendance record."
        });
    }
}
async function getAttendance(req, res) {
    try {
        const { id } = req.params;
        const employee = await getAttendenceById(id);

        if (!employee) {
            return res.status(404).json({
                success: false,
                message: `Employee with ID ${id} not found.`
            });
        }

        res.status(200).json({
            success: true,
            data: employee
        });
    } catch (error) {
        console.error("Error in getEmployee controller:", error);
        res.status(500).json({
            success: false,
            message: "Server error while fetching employee."
        });
    }
}



module.exports={happy,getEmployees,getEmployee,updateEmployee,patchEmployee,addAttendance,getAttendance}