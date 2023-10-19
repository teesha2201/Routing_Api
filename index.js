const express = require("express");
const Port = 5000;
const app = express()
const apiRouting = require("./routing/newapiRouting")
const {authentication} = require("./middleware/authentication")
const cors = require('cors')

app.use(cors({
    origin:"*" 
}))

app.use(authentication)
app.use("/api/main",apiRouting)


app.get("/",(req,res)=>{
    res.send("We can Fetch Api ")
})

app.listen(Port,()=>{
    try{
        console.log(`server is Running on port ${Port}`);
    }
    catch(err){
        console.log(`server is Running on port ${err}`);
    }
})