function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
}
const x = document.getElementById("hamburgerButton");
x.onclick = toggleMenu;

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

document.querySelector(".copyright").textContent = `\u00A9 ${copyrightYear} | Easton Pulver | Utah`

document.getElementById("currentdate").textContent = fullDate;

if (dayName == `Monday` || dayName == `Tuesday`) {
    alert(`🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.`)
};

document.querySelector(".wind-speed").textContent = `Wind Speed: 5 mph`

