/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

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
  // while ( list.firstChild ) {
  //   list.removeChild(list.firstChild)
  // }
  list.innerHTML = null
  for (var country of countries){
    var li = document.createElement("li");
    li.innerText = country.name;
    list.appendChild(li);
  }

}

var onSelect = function(event){
  var requestHelper = __webpack_require__(1);
  event.preventDefault();

  var country = {
    name: this.value
  }


  requestHelper.postRequest("http://localhost:3000/api/countries", function(result){
    console.log("result: ", result);
    displayCountiresList(result);
  }, country);
}

var populateCountryDropdown = function(countriesArray){
  console.log("populate country dropdown is called");
  var countryDropdown = document.getElementById("select-country");
  for(var country of countriesArray){
    var countryOption = document.createElement("option");
    countryOption.textContent = country.name;
    countryDropdown.appendChild(countryOption);
  }
  countryDropdown.addEventListener("change", onSelect);
}

window.addEventListener("load", function(){
  makeRequest("https://restcountries.eu/rest/v2/all", populateCountryDropdown);
  makeRequest("http://localhost:3000/api/countries",displayCountiresList);
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

var requestHelper = {
  getRequest: function (url, callback) {
    var xhr = new XMLHttpRequest()
    xhr.open('GET', url)

    xhr.addEventListener('load', function () {
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })

    xhr.send()
  },
  postRequest: function (url, callback, payload) {
    console.log(url);
    var xhr = new XMLHttpRequest()
    xhr.open('POST', url)

    xhr.addEventListener('load', function () {
      if (xhr.status !== 200) return
      var jsonString = xhr.responseText
      var data = JSON.parse(jsonString)
      callback(data)
    })

    xhr.setRequestHeader('Content-Type', 'application/json')

    var jsonString = JSON.stringify(payload)

    xhr.send(jsonString);
  }
}

module.exports = requestHelper


/***/ })
/******/ ]);