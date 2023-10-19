//
const authentication = (req,res,next)=>{
    const age=22;
    if(age>18)
    {
        console.log("Application Level Middleware:Authentication  Globally is done")
        next();
    }
    else
    {
        res.send("Authentication is not done")
    }
}

const auth = (req,res,next)=>{
    const age=11;
    if(age<40)
    {
        console.log("Authentication is done by auth")
        next();
    }
    else
    {
        res.send("Authentication is  not done auth")
    }
}

module.exports = {authentication,auth};
