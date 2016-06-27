var express = require("express");
var session =require("express-session");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();
var User = require("./models/userSchema.js")
var Wod = require("./models/wod.js")
mongoose.connect("mongodb://localhost/person-project")
app.use(bodyParser.json())
app.use(express.static("../public"))

app.get("/api/test", function(req, res, next){
  User.find(function(err, ans){
    if(err){
      res.status(500).json(err)
    }
    else{
    res.status(200).json(ans)
    }
  })
})

app.post("/api/post", function(req, res, next){

  User.create(req.body, function(err, ans){
    if(err){
      res.status(500).json(err)
    }
    else{
    res.status(200).json(ans)
    }
  })
})






var port = 3000;
app.listen(port, function(){
  console.log("Listening to " + port );
})
