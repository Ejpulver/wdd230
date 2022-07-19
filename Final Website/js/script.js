/*----footer stuff-----*/
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

let copyrightYear = new Date().getFullYear();

document.querySelector(".copyright").textContent = `\u00A9 ${copyrightYear} | Temple Inn and Suites | ${fullDate}`;

/*---nav button----*/
function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById("hamburgerButton");
x.onclick = toggleMenu;
