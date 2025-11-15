
import express from "express";
import futbolRoute from "../src/routes/futbol.route.js";

const app = express()

// middleware
app.use(express.json())
app.use('/api', futbolRoute)

console.log('user:', process.env.USER_PG);



app.listen(3000, ()=>{
    console.log('server corriendo bien');
})