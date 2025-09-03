const { createPool } = require('mysql2/promise')
require('dotenv/config')

const db = createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD
})

const dbConnection = async (error) => {
    try {
        const connection = await db.getConnection()
        console.log("DB Connected...!")
        connection.release
    } catch (error) {
        console.log("DB Error: ",error)
    }
}

dbConnection()

module.exports = db