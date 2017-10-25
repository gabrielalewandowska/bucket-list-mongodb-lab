var MongoClient = require("mongodb").MongoClient;

var countriesQueryHelper = {
  url: "mongodb://localhost:27017/countries_bucket_list",
  all: function (onQueryFinished) {
    MongoClient.connect(this.url, function(err, db){
      var countriesCollection = db.collection("countries");
      countriesCollection.find().toArray(function (err, docs){
        onQueryFinished(docs);
      })
    })
  },
  save: function(countryData, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      var countriesCollection = db.collection("countries");
      countriesCollection.insert(countryData);
      countriesCollection.find().toArray(function(err, docs){
        onQueryFinished(docs);
      })
    })
  }
}

module.exports = countriesQueryHelper;
