const days = [
    "Sunday",
    "Monday", 
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const date = new Date(document.lastModified);
const dayName = days[date.getDay()];
const monthName = months[date.getMonth()];
const year = date.getFullYear();
const fullDate = `${dayName}, ${date.getDate()} ${monthName} ${year}`;

document.getElementById("lastmodified").textContent = `Last modified: ${fullDate}`;

let copyrightYear = new Date().getFullYear();

document.querySelector(".copyright").textContent = `&copy; ${copyrightYear} | Easton Pulver | Utah`