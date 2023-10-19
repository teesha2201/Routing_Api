const  {BWood,HWood,Tech,fit,foodie, BlogData} = require("../controller/controllerApiRouting");
const {auth} = require("../middleware/authentication")
const apiRouting  = require("express").Router() 

// example url: http://localhost:5000/api/main/bollywood/3
apiRouting.get("/bollywood/:id",auth,BWood) //:id for getting particular data of that id
apiRouting.get("/hollywood",auth,HWood)
apiRouting.get("/technology",Tech)
apiRouting.get("/fitness",fit)
apiRouting.get("/food",foodie)

apiRouting.get("/blog/:id",BlogData)
// Hit Url like this way :-  http://localhost:5000/api/main/blog/14/?Category=Bollywood
module.exports = apiRouting