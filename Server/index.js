const express = require('express')
const connectDB=require("./config/db")
const modals= require("./api/Modal/Products")
const cors = require("cors")
const userPostRoute = require("./api/Route/userPost")

const app=express()

//middlewares
app.use(express.json())
app.use(cors())

connectDB()

//routes
app.use("/api", userPostRoute)


app.listen(3000, (req,res)=>{
    console.log("server is running")
})