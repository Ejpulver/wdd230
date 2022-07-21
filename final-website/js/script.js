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

/*---lazy load---*/

const imagesToLoad = document.querySelectorAll("img[data-src]");

const imgOptions = {
    threshold: 1,
    rootMargin: "0px 0px 50px 0px"
};

const loadImages = (image) => {
    image.setAttribute('src', image.getAttribute('data-src'));
    image.onload = () => {image.removeAttribute('data-src');};
};

if('IntersectionObserver' in window) {
    const imgObserver = new IntersectionObserver((items, imgObserver) => {
        items.forEach((item) => {
            if(item.isIntersecting) {
                loadImages(item.target);
                imgObserver.unobserve(item.target)
            }
        })
    }, imgOptions);

    imagesToLoad.forEach((img) => {
        imgObserver.observe(img);
    });
}

else {
    imagesToLoad.forEach((img) => {
        loadImages(img);
    });
}

/*--- weather stuff ---*/

const temperature = document.querySelector(".temperature");
const condition = document.querySelector(".condition");
const humidity = document.querySelector(".humidity");

const day_1 = document.querySelector(".day-1-temp");
const day_2 = document.querySelector(".day-2-temp");
const day_3 = document.querySelector(".day-3-temp");

const url = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.01&lon=-81.07&units=imperial&appid=888875481bdd43d17422e63acf4cbc50';

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
    temperature.innerHTML = `${weatherData.current.temp.toFixed(0)}\xB0 F`;
    condition.innerHTML = `Weather Condition: ${weatherData.current.weather.description}`;
    humidity.innerHTML =  `Humidity: ${weatherData.current.humidity}%`;

    day_1.innerHTML = `${weatherData.daily.temp.day}\xB0 F`;



};

/*--- temple cards stuff ----*/

const requestURL = '';