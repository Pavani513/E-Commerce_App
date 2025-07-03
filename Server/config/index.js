const express = require('express')
const connectDB=require("./db")

const app=express()

connectDB()

app.listen(3000, (req,res)=>{
    console.log("server is running")
})