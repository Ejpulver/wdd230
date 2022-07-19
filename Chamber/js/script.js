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

const temperature = document.querySelector(".temperature-2");
const condition = document.querySelector(".condition");
const humidity = document.querySelector(".humidity")

const url = 'https://api.openweathermap.org/data/2.5/weather?q=Provo&units=imperial&appid=888875481bdd43d17422e63acf4cbc50';

apiFetch(url);

async function apiFetch(apiURL) {
    try {
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else {
            throw Error(await response.text()); 
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(weatherData) {
    temperature.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;
}
window.localStorage.setItem('lastVisit', date.now())

function updateLastVisit() {
    let date = new Date()
    let lastDate = new Date(window.localStorage.getItem('lastVisit'))
    
    let diff = date.getTime() - lastDate.getTime()

    let dayDiff = Math.round(diff / (1000 * 3600 * 24))

    document.querySelector('last-visit').textContent = "Last visit: " + dayDiff + " days ago"

    window.localStorage.setItem("lastVisit", date)
}