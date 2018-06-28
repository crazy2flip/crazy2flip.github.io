    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    document.getElementById("currentdate").innerHTML = weekday[d.getDay()]+", "+d.getDate()+" "+months[d.getMonth()]+" "+d.getFullYear();


    var weekdayAbr = new Array(7);
    weekdayAbr[0] = "Sun";
    weekdayAbr[1] = "Mon";
    weekdayAbr[2] = "Tue";
    weekdayAbr[3] = "Wed";
    weekdayAbr[4] = "Thur";
    weekdayAbr[5] = "Fri";
    weekdayAbr[6] = "Sat";

    var icon = new Array(7);
    icon[0] = '/assignments/weathersite/images/weather-icons/Cloud-Lightning-Sun.svg'
    icon[1] = '/assignments/weathersite/images/weather-icons/Cloud-Drizzle-Sun.svg'
    icon[2] = '/assignments/weathersite/images/weather-icons/Cloud-Hail-Alt.svg'
    icon[3] = '/assignments/weathersite/images/weather-icons/Cloud-Lightning.svg'
    icon[4] = '/assignments/weathersite/images/weather-icons/Cloud-Rain.svg'
    icon[5] = '/assignments/weathersite/images/weather-icons/Cloud-Wind-Sun.svg'
    icon[6] = '/assignments/weathersite/images/weather-icons/Cloud-Hail.svg'
    
    var iconAlt = new Array(7);
    iconAlt[0] = "Cloud with Hail";
    iconAlt[1] = "Cloud with Drizzle";
    iconAlt[2] = "Cloud with Sun and Lighting";
    iconAlt[3] = "Lighting";
    iconAlt[4] = "Rain";
    iconAlt[5] = "Wind Cloud";
    iconAlt[6] = "Cloud with Light Hail";

    
    var CurDay = d.getDay();
    
    for (var i = 0; i < 10; i++) {
        if (CurDay > 6) {
            CurDay = 0;
        } 

        document.getElementById('tenDayForecast').rows[0].cells[i].innerHTML = weekdayAbr[CurDay];
        document.getElementById('tenDayForecast').rows[1].cells[i].querySelector('img').src = icon[CurDay];
        document.getElementById('tenDayForecast').rows[1].cells[i].querySelector('img').alt = iconAlt[CurDay];
        CurDay++;
    }
  
    //The Icon would normally come from an external JSON source but I did this to show the client what can be automated.
