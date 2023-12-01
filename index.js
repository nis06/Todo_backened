const express=require('express')
const app=express();

require("dotenv").config()

const Port=process.env.PORT || 4000;

app.use(express.json())

const todoRoutes =require('./routes/todo')

app.use("/api/v1",todoRoutes);

app.listen(Port,()=>{
    console.log(`SERVER STARTED AT ${Port}`)
})

//CONNECT TO THE DATABASE

const dbConnect=require("./config/dataBase");
dbConnect();

app.get("/",(req,res)=>{
    res.send(`<h1>THIS IS FIRST PAGE</h1>`)
})
