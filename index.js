const express = require("express");
const app = express()

app.use(()=>{
    console.log("We got A new request")
})


// console.dir(app)
app.listen(8080,()=>{
    console.log("LISTENING ON PORT 8080")
})