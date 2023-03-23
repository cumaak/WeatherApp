const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".details");
const error404 = document.querySelector(".error");

const otherCities = document.querySelector(".other-cities");
const images = [...document.querySelectorAll(".other-weather-box img")];
const descriptions = [...document.querySelectorAll(".other-description")];
const temperatures = [...document.querySelectorAll(".other-temperature")];
const humidities = [...document.querySelectorAll(".other-humidity span")];
const winds = [...document.querySelectorAll(".other-wind span")];
const cityNames = [...document.querySelectorAll(".other-city-name h5")];

const APIKey = '0bfac1d443ea0911ee415a3453aec618';
const lang = `tr`;
const cities = ["istanbul", "ankara", "izmir"];

search.addEventListener('click', () => {
    
    const location = document.querySelector(".search-box input").value;

    if (location === ''){
        return;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${APIKey}&lang=${lang}`)
    .then(response=> response.json())
    .then(json => {
        if(json.cod === '404'){
            container.style.height = '35rem';
            weatherBox.style.display = 'none';
            weatherDetails.style.display = 'none';
            error404.style.display = 'block';
            error404.classList.add('fadeIn');
            otherCities.style.top = '45rem';
            return;
        }
        error404.style.display = 'none';
        error404.classList.remove('fadeIn');

        const image = document.querySelector(".weather-box img");
        const temperature = document.querySelector(".temperature");
        const description = document.querySelector(".description");
        const humidity = document.querySelector(".humidity span");
        const wind = document.querySelector(".wind span");

        switch (json.weather[0].main) {
            case 'Clear':
                image.src = 'images/clear.png';
                break;
    
            case 'Rain':
                image.src = 'images/rain.png';
                break;
    
            case 'Snow':
                image.src = 'images/snow.png';
                break;
    
            case 'Clouds':
                image.src = 'images/cloud.png';
                break;
    
            case 'Haze':
                image.src = 'images/mist.png';
                break;
    
            default:
                image.src = '';
        }
        description.innerHTML = `${json.weather[0].description}`;
        temperature.innerHTML = `${parseInt(json.main.temp)}°C`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${parseInt(json.wind.speed)}Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
        weatherBox.classList.add('fadeIn');
        weatherDetails.classList.add('fadeIn');
        container.style.height = '55rem';
        otherCities.style.top = '65rem';
    });
});

for (let i = 0; i < cities.length; i++) {
    cityNames[i].innerHTML = cities[i]; 
    
}

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities[0]}&units=metric&appid=${APIKey}&lang=${lang}`)
.then((response)=> {return response.json();})
.then((data)=> {
    switch (data.weather[0].main) {
        case 'Clear':
            images[0].src = 'images/clear.png';
            break;

        case 'Rain':
            images[0].src = 'images/rain.png';
            break;

        case 'Snow':
            images[0].src = 'images/snow.png';
            break;

        case 'Clouds':
            images[0].src = 'images/cloud.png';
            break;

        case 'Haze':
            images[0].src = 'images/mist.png';
            break;

        default:
            images[0].src = '';
    }
    descriptions[0].innerHTML = `${data.weather[0].description}`;
    temperatures[0].innerHTML = `${parseInt(data.main.temp)}°C`;
    humidities[0].innerHTML = `${data.main.humidity}%`;
    winds[0].innerHTML = `${parseInt(data.wind.speed)}Km/h`;
   
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities[1]}&units=metric&appid=${APIKey}&lang=${lang}`);
})
.then((response)=> {return response.json();})
.then((data)=> {
    let image2 = null;
    switch (data.weather[0].main) {
        case 'Clear':
            images[1].src = 'images/clear.png';
            break;

        case 'Rain':
            images[1].src = 'images/rain.png';
            break;

        case 'Snow':
            images[1].src = 'images/snow.png';
            break;

        case 'Clouds':
            images[1].src = 'images/cloud.png';
            break;

        case 'Haze':
            images[1].src = 'images/mist.png';
            break;

        default:
            images[1].src = '';
    }
    descriptions[1].innerHTML = `${data.weather[0].description}`;
    temperatures[1].innerHTML = `${parseInt(data.main.temp)}°C`;
    humidities[1].innerHTML = `${data.main.humidity}%`;
    winds[1].innerHTML = `${parseInt(data.wind.speed)}Km/h`;
    
    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cities[2]}&units=metric&appid=${APIKey}&lang=${lang}`);
})
.then((response)=> {return response.json();})
.then((data)=> {
    let image3 = null;
    switch (data.weather[0].main) {
        case 'Clear':
            images[2].src = 'images/clear.png';
            break;

        case 'Rain':
            images[2].src = 'images/rain.png';
            break;

        case 'Snow':
            images[2].src = 'images/snow.png';
            break;

        case 'Clouds':
            images[2].src = 'images/cloud.png';
            break;

        case 'Haze':
            images[2].src = 'images/mist.png';
            break;

        default:
            images[2].src = '';
    }
    descriptions[2].innerHTML = `${data.weather[0].description}`;
    temperatures[2].innerHTML = `${parseInt(data.main.temp)}°C`;
    humidities[2].innerHTML = `${data.main.humidity}%`;
    winds[2].innerHTML = `${parseInt(data.wind.speed)}Km/h`;
})
.catch((error)=> {console.log(error);});

cityNames[0] = "beni bıragma neclağğğ";

