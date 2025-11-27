import { getCurrentWeather, getCurrentCityByLonAndLat,matchWetherCodeToIcon } from "./getweatherdata.js";

let currentLatitude;
let currentLlongitude;
let currentLocation;


window.onload = async () => {
    navigator.geolocation.getCurrentPosition(async (pos)=>{
        currentLatitude = pos.coords.latitude;
        currentLlongitude = pos.coords.longitude;
        currentLocation =  await getCurrentCityByLonAndLat(currentLatitude, currentLlongitude)
        getCurrentWeather(currentLatitude,currentLlongitude).then(setWetherInfo, setFallback);
    }, (err)=>{
        console.error(err)
    })
}

const setWetherInfo = (res) => {
    console.log("running setwether info callback")
    setCurrentWetherInfo(res)    
}


function setCurrentWetherInfo(res){
    const locationElement = document.getElementById('location');
    const dateElement = document.getElementById('date');
    const poster_weather_city_icon = document.querySelector('.wether_info_current_poster_city_location_degree_icon_icon img');
    const degElement = document.getElementById('deg');
    const apparentTemp = document.getElementById('apparent-temp');
    const humidityElement = document.getElementById('humidity');
    const windElement = document.getElementById('wind');
    const precipitationElement = document.getElementById('precipitation');

    precipitationElement.innerText = `${res?.precipitation ?? "--"}`
    windElement.innerText = `${res?.wind_speed_10m ?? '--'}`
    humidityElement.innerText = `${res?.relative_humidity_2m ?? '--'}`
    apparentTemp.innerText = `${res?.apparent_temperature ?? '--'}`
    degElement.innerText = `${res?.temperature_2m ?? '--'}`;
    poster_weather_city_icon.src = matchWetherCodeToIcon(res?.weather_code);
    locationElement.innerText = `${currentLocation?.city ?? '--'}, ${currentLocation?.country ?? '--'}`;
    dateElement.innerText = `${new Date(res?.time)?.toDateString() ?? "--"}`
}


function setFallback(err){
    console.log(err);
}