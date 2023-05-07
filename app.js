
// "APIKEY": "760d34e55a3b4261a1c201107232604"  "https://api.weatherapi.com/v1/current.json?key=760d34e55a3b4261a1c201107232604&q=dallas&aqi=no"
// f6fe9d66482e0fbd69d8ee49e3ec5590

let weather = {
    apiKey: "f6fe9d66482e0fbd69d8ee49e3ec5590",
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=imperial&appid=" 
            + this.apiKey
        )
            .then((response) => response.json())
            .then ((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon +".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°F";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText = "Wind speed: " + speed + " m/h";
        document.querySelector(".weather").classList.remove("loading")
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/? "+ name +" ')"
    },
    search: function () {
        this.fetchWeather (document.querySelector(".search__bar").value);
    }
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search()
})
document.querySelector(".search__bar").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
        weather.search()
    }
});
weather.fetchWeather("Denver")