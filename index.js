const fs = require("fs");
const express = require("express");
const path = require("path")


const app = express();
console.log(__dirname)

app.get("",(req,res)=>{
    res.send({
        name:"ranjit",
        age:34
    })
})

app.listen(5400)