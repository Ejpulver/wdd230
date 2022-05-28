let wind_speed = 5;
let temperature = 39;
let wind_chill;

wind_chill = 35.74 + (0.6215 * temperature) - 35.75 * (wind_speed ** 0.16) + (0.4275 * temperature) * (wind_speed ** 0.16);

if (temperature <= 50 && wind_speed > 3) {
document.getElementsByClassName(".wind-chill").textContent = `Wind Chill: ${wind_chill} F`
}
else {
    document.getElementsByClassName(".wind-chill").textContent = `Wind Chill: N/A`
}