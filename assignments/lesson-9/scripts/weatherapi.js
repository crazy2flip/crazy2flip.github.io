
    
    var townName = document.getElementById("town-name").innerHTML;
    
    switch(townName) {
        case "Franklin":
        var townId = "4156210";
        break;
            
        case "Greenville":
        var townId = "";
        break;
        
        case "Springfield":
        var townId = "";
        break;
    }

    var weatherRequest = new XMLHttpRequest();
    var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=" + townId + "&units=imperial&APPID=352e4182bffafca3301ca52898bb9c5d";
    weatherRequest.open('GET', apiURL, true);
    weatherRequest.send();
    weatherRequest.onload =  function () {
        let weatherData = JSON.parse(weatherRequest.responseText);
        document.getElementById("cur-description").innerHTML = weatherData.weather[0].description;
        let imagesrc = "https://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
        document.getElementById("weather-icon").src = imagesrc;
        var curTemp = weatherData.main.temp;
        document.getElementById("cur-temp").innerHTML = curTemp;
        document.getElementById("humidity-level").innerHTML = weatherData.main.humidity;
        var windSpeed = weatherData.wind.speed;
        document.getElementById("wind-speed").innerHTML = windSpeed;
        calculateWindChill(windSpeed, curTemp);
    }

    
