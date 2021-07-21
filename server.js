const express =require("express")
const bodyParser =require("body-parser")
const cors = require("cors")

const app =express()
 var corsOption ={
     origin:"http:localhost:8081"
 }
 app.use(cors(corsOption))


 app.use(bodyParser.json())

 app.use(bodyParser.urlencoded({extended:true}))

 app.get("/",(req,res)=>{
     res.json({message:"welcome to sql app"})
 })

 const PORT =process.env.PORT || 8080;
 app.listen((PORT),()=>{
     console.log("server is running with port 8080")
 });