var express = require('express');
var app = express();

app.use(express.static(__dirname + "/../client/build"));

var countriesRouter = require("./controllers/countries_controller.js");
app.use("/api/countries", countriesRouter);

app.listen(3000, function(){
  console.log("Server running on port " + this.address().port);
})
