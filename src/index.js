
import express from "express";
import futbolRoute from "../src/routes/futbol.route.js";

const app = express()

// middleware
app.use(express.json())
app.use('/api', futbolRoute)





app.listen(3000, ()=>{
    console.log('server en aws. con sus secrets');
})