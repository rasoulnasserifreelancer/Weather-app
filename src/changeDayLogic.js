import { getHourlyWeatherElements } from "./getElements.js";
import { getweatherInfoGotByUserLocation } from "./getLocationLogic.js";
import { getweatherInfoGotByUserSearch } from "./searchLocationLogic.js";
import { setHourlyWetherInfo } from "./setWeatherLogic.js";



const currentDayElement = getHourlyWeatherElements().CurrentDayElement;

currentDayElement.addEventListener("change", async (e) => {
  let weatherInfo = getweatherInfoGotByUserSearch() || await getweatherInfoGotByUserLocation(e.target.dataset.currentLatitude, e.target.dataset.currentLlongitude) ;
  console.log(weatherInfo);
  for (let option of e.target) {
    if (option.value === e.target.value) {
      console.log(option);
      option.selected = true;
      setHourlyWetherInfo(weatherInfo[2]);
    }
  }
});
