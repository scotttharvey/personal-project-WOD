var express = require("express");
var session =require("express-session");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();
var userCtrl = require("./controllers/userCtrl")
var wodCtrl = require("./controllers/wodCtrl")
var User = require("./models/userSchema.js")
var Wod = require("./models/wod.js")
mongoose.connect("mongodb://localhost/person-project")
app.use(bodyParser.json())
app.use(express.static("../public"))

app.get("/api/user", userCtrl.getAllUsers)
app.post("/api/user", userCtrl.addUser)


app.get("/api/wod", wodCtrl.getAllWods)
app.post("/api/wod", wodCtrl.addWod)
app.delete("/api/wod/:id", wodCtrl.deleteWod)




var port = 3000;
app.listen(port, function(){
  console.log("Listening to " + port );
})
