function calculateWindChill(windSpeed, curtemp) {
    var s = windSpeed;
    var t = curtemp;
    var s_pow = Math.pow(s,0.16);
    var WindChill = 35.74 + (0.6215 * t) - (35.75 * s_pow) + (0.4275 * t * s_pow);
    document.getElementById("wind-chill").innerHTML = Math.round(WindChill);
}