use countries_bucket_list;

db.dropDatabase();

db.countries.insert([
  {name: "Argentina"},
  {name: "Brazil"}
]);

db.find();
