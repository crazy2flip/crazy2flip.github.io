var weatherRequest = new XMLHttpRequest();
var apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4156210&units=imperial&APPID=352e4182bffafca3301ca52898bb9c5d"
weatherRequest.open('GET', apiURL, true);
weatherRequest.send();
weatherRequest.onload =  function () {
    let weatherData = JSON.parse(weatherRequest.responseText);
    console.log(weatherData);
    document.getElementById("cur-temp").innerHTML = weatherData.main.temp;
    let imagesrc = 'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png';
    document.getElementById("weather-icon").src = imagesrc;
    
}