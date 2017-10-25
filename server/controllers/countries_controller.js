var countriesQueryHelper = require("../db/countriesQueryHelper");
var express = require("express");
var countriesRouter = express.Router();

countriesRouter.get("/", function(req, res){
  countriesQueryHelper.all(function(countries){
    res.json(countries);
  })
})

module.exports = countriesRouter;
