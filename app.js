import { getCurrentWeather, getCurrentCityByLonAndLat } from "./getweatherdata.js";
let currentLatitude;
let currentLlongitude;

window.onload = () => {
    navigator.geolocation.getCurrentPosition((pos)=>{
        currentLatitude = pos.coords.latitude;
        currentLlongitude = pos.coords.longitude;
        getCurrentWeather(currentLatitude,currentLlongitude).then(setCurrentWetherInfo, setFallback);
    }, (err)=>{
        console.error(err)
    })
}

function setCurrentWetherInfo(res){
    console.log(res);
    getCurrentCityByLonAndLat(currentLatitude, currentLlongitude).then((res)=>console.log(res))
}


function setFallback(err){
    console.log(err);
}