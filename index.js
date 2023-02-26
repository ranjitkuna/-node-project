const fs = require("fs");
const http  = require("http");

http.createServer((req,res)=>{
    res.write("i am working");
    res.end()
}).listen(5000)


console.log("this is working");