var countriesQueryHelper = require("../db/countriesQueryHelper");
var express = require("express");
var countriesRouter = express.Router();


countriesRouter.get("/", function(req, res){
  countriesQueryHelper.all(function(countries){
    res.json(countries);
  })
})

countriesRouter.post("/", function(req, res){
  var country = req.body;
  console.log(country);
  countriesQueryHelper.save(country, function(updatedCountry){
    res.json(updatedCountry);
  })
})

module.exports = countriesRouter;
