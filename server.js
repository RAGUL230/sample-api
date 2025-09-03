const express = require("express")
const db = require('./config/db');
const router = require("./route/userRoute");
const target = require("./route/hRoute");
const saving = require("./route/sroute");


const app = express();
app.use(express.json())

app.get('/', () => {
    console.log("API Working!")
})

app.use('/api/ralf', router)
app.use('/ivw/ralf', target)
app.use('/ivw/ralf', saving)



const PORT = 5000
app.listen(PORT, () => {
    console.log(`App is running on PORT: ${PORT}`)
})