import {
  getCurrentCityByLonAndLat,
} from "./getApiData.js";
import { getDropdownElements, getErrorElement, getHourlyWeatherElements } from "./getElements.js";


import { getweatherInfoGotByUserLocation} from "./getLocationLogic.js";
import { removeLoadingState, setLoadingState } from "./loading.js";
import { setWetherInfo } from "./setWeatherLogic.js";
import { hideErrorElement, hideWeatherInfoElements, showErrorElement, hideLocationSearchResult, hideUnitDropDown } from "./showHideElements.js";
import { getAllNodes } from "./utils.js";


setLoadingState()

window.onload = () => {
  navigator.geolocation.getCurrentPosition(
    setPsitionCallbck,
    setFallbackForLocation
  );
};

export const setPsitionCallbck = async (pos) => {
  let currentLatitude = pos.coords.latitude;
  let currentLlongitude = pos.coords.longitude;
  const currentDayElement = getHourlyWeatherElements().CurrentDayElement;
  currentDayElement.dataset.currentLatitude = currentLatitude;
  currentDayElement.dataset.currentLlongitude = currentLlongitude;
  let currentLocation;
  removeLoadingState();
  hideErrorElement();
  try {
    currentLocation = await getCurrentCityByLonAndLat(
      currentLatitude,
      currentLlongitude
    );
    setWetherInfo(await getweatherInfoGotByUserLocation(currentLatitude, currentLlongitude), currentLocation);
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
  removeLoadingState();
  showErrorElement("We Couldn't access your location, please try searching for your location", "https://img.icons8.com/neon/96/delete-sign.png");
};


const hideUnitDropDownOnClick = (e) => {
    const dropdown = getDropdownElements().dropdown;
    const allNodes = getAllNodes(dropdown, []);
    console.log(allNodes.includes(e.target))
    if (!allNodes.includes(e.target)) {
      hideUnitDropDown()
    } 
}

const documentClickEventCallBacks = {
  handleEvent : (e) => {
    hideLocationSearchResult(e);
    hideUnitDropDownOnClick(e);
  }

}


document.addEventListener('click', documentClickEventCallBacks)



