var express = require("express");
var session =require("express-session");
var cors = require("cors");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var app = express();



app.use(express.static("../public"))







var port = 3000;
app.listen(port, function(){
  console.log("Listening to " + port );
})
