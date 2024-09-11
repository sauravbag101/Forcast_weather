const apiKey = "e66d086610a9e7f5844ebe48794bcb99";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";

    }else{
        let data = await response.json();
        console.log(data);
    
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C" ;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed  + "Km/h";
        document.querySelector(".Temp_Min").innerHTML = data.main.temp_min  + "°C";
        document.querySelector(".Pressure").innerHTML = data.main.pressure  + "°C";
        // document.querySelector(".sunrise").innerHTML = getTimezoneOffset(data.sys.sunrise) * 1000   + "Km/h";
        document.querySelector(".Precipitation").innerHTML = Math.round(data.main.feels_like)  + "%";
        document.querySelector(".Air").innerHTML = Math.round(data.coord.lat) + "%";
        document.querySelector(".Wind_Gust").innerHTML = Math.round(data.wind.deg) + "Km";

       





    
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src = "./images/clouds.png";
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src = "./images/clear.png";
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src = "./images/rain.png";
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src = "./images/drizzle.png";
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src = "./images/mist.png";
        }
    
        document.querySelector(".weather").style.display = "block"
        document.querySelector(".error").style.display = "none";

    }
    }
    

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})


let unix = 1507473344;
let date = new Date(unix*1000);

console.log(date);