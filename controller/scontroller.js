const { fancname } = require("../Model/stestmodel")

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
module.exports={salary}
