var APIkey = "382a866a12d4771b986b0f7e34c597a5";
var cities = [];

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

var saveCities = function() {
    localStorage.setItem("cities", JSON.stringify(cities));
}

var displaySearchedCities = function(city) {
    var cityCardEl = document.createElement("div");
    cityCardEl.setAttribute("class", "card");
    var cityCardNameEl = document.createElement("div");
    cityCardNameEl.setAttribute("clas", "card-body searched-city");
    cityCardNameEl.textContent = city;

    cityCardEl.appendChild(cityCardNameEl)

    cityCardEl.addEventListener("click", function() {
        getCityDate(city)
    });

    searchHistoryEl.appendChild(cityCardEl)
}

var displayCurrentData = function(city, data) {

    var tempCurrent = Math.round(data.current.temp);
    var humidity = Math.round(data.current.humility);
    var windSpeed = data.current.wind_speed;
    var uvIndex = data.current.uvi;
    var iconCurrent = data.current.weather[0].icon;

    currentContainerEl.textContent = "";
    currentContainerEl.setAtrribute("class", "m-3 border col-10 text-center");
    var divCityHeader = document.createElement("div");
    var headerCityDate = document.createElement(h2);
    var currentDate = moment().format("L");
    var imageIcon = document.createElement("img");
    imageIcon.setAttribute('src', "");
    imageIcon.setAtttribute('src', "https://openweathermap.org/img/wn/" + iconCurrent + "@2x.png");
    headerCityDate.textContent = city +" (" + currentDate + ")";
    
    divCityHeader.appendChild(headerCityDate)
    divCityHeader.appendChild(imageIcon)
    currentContainerEl.appendChild(divCityHeader)

    var divCurrent = document.createElement("div");
    var tempEl = document.createElement("p");
    var humidityEl = document.createElement("p");
    var windSpeedEl = document.createElement("p");
    var uvIndexEl = document.createElement("p");
    var uvIndexColorEl = document.createElement("span");

    uvIndexColorEl.textContent = uvIndex

        if (uvIndex <= 4) {
            uvIndexColorEl.setAttribute("class", "bg-success text-white p-2")
        } else if (uvIndex <= 8) {
            uvIndexColorEl.setAttribute("class", "bg-warning text-black p-2")
        } else {
            uvIndexColorEl.setAttribute("class", "bg-danger text-white p-2")
        }
    
    tempEl.textContent = "Temperature: " + tempCurrent + "°F";
    humidityEl.textContent = "Humidity: " + humidity + "%";
    windSpeedEl.textContent = "Wind Speed: " + windSpeed + " MPH";
    uvIndexEl.textContent = "UV Index: ";

    uvIndexEl.appendChjild(uvIndexColorEl)

    divCurrent.appendChild(tempEl);
    divCurrent.appendChild(humidityEl);
    divCurrent.appendChild(windSpeedEl);
    divCurrent.appendChild(uvIndexEl);

    currentContainerEl.appendChild(divCurrent);

};
