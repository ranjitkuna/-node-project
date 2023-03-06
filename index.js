const fs = require("fs");
const express = require("express");
const path = require("path")


const app = express();
console.log(__dirname)
let publickpath = path.join(__dirname,"files");
// app.use(express.static(publickpath))
app.get("",(req,res)=>{
    res.sendFile(`${publickpath}/index.html`)
})
app.get("/all",(req,res)=>{
    res.sendFile(`${publickpath}/about.html`)
})
app.get("*",(req,res)=>{
    res.sendFile(`${publickpath}/404.html`)
})
app.listen(5400)