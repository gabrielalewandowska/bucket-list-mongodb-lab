var makeRequest = function() {
  var request = new XMLHttpRequest();
    request.open( "GET", "https://restcountries.eu/rest/v2/all");
    request.addEventListener( "load", function() {
    var countries = JSON.parse(this.responseText);
    console.log("request is made")
    populateCountryDropdown(countries);
  })
  request.send();
}

var populateCountryDropdown = function(countriesArray){
  console.log("populate country dropdown is called");
  var countryDropdown = document.getElementById("select-country");
  for(var country of countriesArray){
    var countryOption = document.createElement("option");
    countryOption.textContent = country.name;
    countryDropdown.appendChild(countryOption);
  }
  // countryDropdown.addEventListener("change", );
}

window.addEventListener("load", makeRequest);
