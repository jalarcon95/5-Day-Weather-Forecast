var APIkey = "382a866a12d4771b986b0f7e34c597a5";
var cities = []

var cityInputEl = document.getElementById("city-input");
var cityFormEl = document.getElementById("city-form");
var searchEl = document.getElementById("search-button");
var searchHistoryEl = document.getElementById("search-history");
var currentContainerEl = document.getElementById("current-container");
var forecastContainerEl = document.getElementById("forecast-container");

var loadCities = function() {
    var citiesLoaded = localStorage.getItem("cities")
    if(!citiesLoaded) {
        return false;
    }

    citiesLoaded = JSON.parse(citiesLoaded);

    for(var i=0; 1 < citiesLoaded.length; i++) {
        displaySearchedCities(citiesLoaded[i])
        cities.push(citiesLoaded[i])
    }
}

