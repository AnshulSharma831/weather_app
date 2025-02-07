        

const apiKey = "23e99b5346449c59fc4e87625d989d97";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}` + `&units=metric`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =Math.round(data.main.temp)+ "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    const weatherCondition = data.weather[0].main.toLowerCase();

    if (weatherCondition.includes("clear")) {
        weatherIcon.src = "images/clear.png";
    } else if (weatherCondition.includes("rain")) {
        weatherIcon.src = "images/rain.png";
    } else if (weatherCondition.includes("drizzle")) {
        weatherIcon.src = "images/drizzle.png";
    } else if (weatherCondition.includes("mist")) {
        weatherIcon.src = "images/mist.png";
    } else {
        weatherIcon.src = "images/clouds.png";
    }
}
searchBtn.addEventListener("click" , ()=>{
    checkWeather(searchBox.value);
})
