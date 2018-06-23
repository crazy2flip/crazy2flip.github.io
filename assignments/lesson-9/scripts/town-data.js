function addCommas(myValue) {
    var Formated = myValue.toString().split(".");
    Formated[0] = Formated[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return Formated.join(".");
}


var town_data_Request = new XMLHttpRequest();
    var data_URL = "https://byui-cit230.github.io/weather/data/towndata.json";
    town_data_Request.open('GET', data_URL, true);
    town_data_Request.send();
    town_data_Request.onload =  function () {
        let town_data = JSON.parse(town_data_Request.responseText);
        
        var x = 0;
        while (town_data.towns[x].name != "Franklin") {
            x++;
        }
        
        document.getElementById("motto-f").innerHTML = town_data.towns[x].motto;
        document.getElementById("year-founded-f").innerHTML = town_data.towns[x].yearFounded;
        document.getElementById("num-people-f").innerHTML = addCommas(town_data.towns[x].currentPopulation);
        document.getElementById("rainy-days-f").innerHTML = town_data.towns[x].averageRainfall;
        
        x = 0;
        while (town_data.towns[x].name != "Greenville") {
            x++;
        }
        
        document.getElementById("motto-g").innerHTML = town_data.towns[x].motto;
        document.getElementById("year-founded-g").innerHTML = town_data.towns[x].yearFounded;
        document.getElementById("num-people-g").innerHTML = addCommas(town_data.towns[x].currentPopulation);
        document.getElementById("rainy-days-g").innerHTML = town_data.towns[x].averageRainfall;
        
        x = 0;
        while (town_data.towns[x].name != "Springfield") {
            x++;
        }
        
        document.getElementById("motto-s").innerHTML = town_data.towns[x].motto;
        document.getElementById("year-founded-s").innerHTML = town_data.towns[x].yearFounded;
        document.getElementById("num-people-s").innerHTML = addCommas(town_data.towns[x].currentPopulation);
        document.getElementById("rainy-days-s").innerHTML = town_data.towns[x].averageRainfall;
        
    }
