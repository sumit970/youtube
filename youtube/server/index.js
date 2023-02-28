import express from 'express';
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import connectDB from './DatabaseDB/connect.js'
import route from './Routes/routehandle.js';
const app= express()

app.use(route);
const port = 8080 || process.env.PORT

dotenv.config()
 
app.get('/index',(req,res)=>{
    res.send("Hello World from the Serverof the world!");
})

const StartServer= async()=>{
    // console.log(`${process.env.URL}`)
    
     connectDB(process.env.URL);

    app.listen(8080,()=>{
        console.log(`server is listning on http://localhost:${port}`)
    })

}

StartServer();