const { funcname ,getAllEmployees} = require("../Model/TestModel")

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

module.exports={happy,getEmployees}