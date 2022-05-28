const wind_speed = parseInt(document.querySelector(".wind-speed").innerHTML);
const temperature = parseInt(document.querySelector(".temperature").innerHTML);
const windchill = document.querySelector(".wind-chill");

if ((temperature <= 50) && (wind_speed < 3)) {
    const f = 35.74 + (0.6215 * temperature) - (35.775 * Math.pow(wind_speed, 0.16)) + (0.4275 * temperature * Math.pow(wind_speed, 0.16));
    windchill.textContent = f.toFixed(1) + `°F`;
}