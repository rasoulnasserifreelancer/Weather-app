import {
  getCurrentCityByLonAndLat,
} from "./getApiData.js";
import { getErrorElement } from "./getElements.js";


import { getweatherInfoGotByUserLocation} from "./getLocationLogic.js";
import { setWetherInfo } from "./setWeatherLogic.js";
import { hideErrorElement, hideWeatherInfoElements, showErrorElement, hideLocationSearchResult } from "./showHideElements.js";




window.onload = () => {
  navigator.geolocation.getCurrentPosition(
    setPsitionCallbck,
    setFallbackForLocation
  );
};

export const setPsitionCallbck = async (pos) => {
  let currentLatitude = pos.coords.latitude;
  let currentLlongitude = pos.coords.longitude;
  let currentLocation;
  hideErrorElement();
  try {
    currentLocation = await getCurrentCityByLonAndLat(
      currentLatitude,
      currentLlongitude
    );
    setWetherInfo(getweatherInfoGotByUserLocation(currentLatitude, currentLlongitude), currentLocation);
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const ErrorBtn = getErrorElement().ErrorBtn;
ErrorBtn.addEventListener('click', hideErrorElement)

const setFallbackForApi = (err) => {};

const setFallbackForLocation = (err) => {
  hideWeatherInfoElements();
  showErrorElement("We Couldn't access your location, please try searching for your location", "https://img.icons8.com/neon/96/delete-sign.png");
};


const setLoadingState = () => {};


document.addEventListener('click', hideLocationSearchResult)
