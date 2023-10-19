const  {BWood,HWood,Tech,fit,foodie} = require("../controller/controllerApiRouting");
const {auth} = require("../middleware/authentication")
const apiRouting  = require("express").Router() 

apiRouting.get("/bollywood",auth,BWood)
apiRouting.get("/hollywood",auth,HWood)
apiRouting.get("/technology",Tech)
apiRouting.get("/fitness",fit)
apiRouting.get("/food",foodie)

module.exports = apiRouting