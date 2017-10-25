var makeRequest = function(url, callback) {
  var request = new XMLHttpRequest();
    request.open( "GET", url);
    request.addEventListener( "load", function() {
      var data = JSON.parse(this.responseText);
      console.log("request is made")
      callback(data);
  })
  request.send();
}

var displayCountiresList = function(countries){
  var list = document.getElementById("countries-list");
  for (var country of countries){
    var li = document.createElement("li");
    li.innerText = country.name;
    list.appendChild(li);
  }

}
// var saveCountryToDb = function(){
//   var country = {
//     name: this.value
//   }
// }

var populateCountryDropdown = function(countriesArray){
  console.log("populate country dropdown is called");
  var countryDropdown = document.getElementById("select-country");
  for(var country of countriesArray){
    var countryOption = document.createElement("option");
    countryOption.textContent = country.name;
    countryDropdown.appendChild(countryOption);
  }
  // countryDropdown.addEventListener("change", saveCountryToDb);
}

window.addEventListener("load", function(){
  makeRequest("https://restcountries.eu/rest/v2/all", populateCountryDropdown);
  makeRequest("http://localhost:3000/api/countries",displayCountiresList);
});
