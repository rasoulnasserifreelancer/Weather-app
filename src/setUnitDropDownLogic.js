import { celsiusToFahrenheit, fahrenheitToCelsius, kmhToMph, mphToKmh } from "./changeUnitLogic.js";
import {
  getCurrentWeatherElements,
  getDailyWeatherElements,
  getDropdownElements,
  getHourlyWeatherElements,
} from "./getElements.js";
import { showUnitDropDown } from "./showHideElements.js";

const iconDropdown = getDropdownElements().iconDropdown;
const dropdownContainer = getDropdownElements().dropdownUnitList;
const systemSwitch = getDropdownElements().systemSwitch;
const temperatureCel = getDropdownElements().temperatureCel;
const temperatureFar = getDropdownElements().temperatureFar;
const precipitationMm = getDropdownElements().precipitationMm;
const precipitationIn = getDropdownElements().precipitationIn;
const windspeedKmh = getDropdownElements().windspeedKmh;
const windspeedMph = getDropdownElements().windspeedMph;
const checkMarkIcons = getDropdownElements().checkMarkIcons;

const changeTempToFarForAllElements = () => {
  const degElement = getCurrentWeatherElements().degElement;
  const apparentTemp = getCurrentWeatherElements().apparentTemp;
  const dayMaxElements = getDailyWeatherElements().dayMaxElements;
  const dayMinElements = getDailyWeatherElements().dayMinElements;
  const hourTempElements = getHourlyWeatherElements().hourTempElements;
  degElement.innerText = celsiusToFahrenheit(degElement.innerText);
  apparentTemp.innerText = celsiusToFahrenheit(apparentTemp.innerText);
  dayMaxElements.forEach(
    (el) => (el.innerText = celsiusToFahrenheit(el.innerText))
  );
  dayMinElements.forEach(
    (el) => (el.innerText = celsiusToFahrenheit(el.innerText))
  );
  hourTempElements.forEach(
    (el) => (el.innerText = celsiusToFahrenheit(el.innerText))
  );
};

const changeTempToCelForAllElements = () => {
  const degElement = getCurrentWeatherElements().degElement;
  const apparentTemp = getCurrentWeatherElements().apparentTemp;
  const dayMaxElements = getDailyWeatherElements().dayMaxElements;
  const dayMinElements = getDailyWeatherElements().dayMinElements;
  const hourTempElements = getHourlyWeatherElements().hourTempElements;
  degElement.innerText = fahrenheitToCelsius(degElement.innerText);
  apparentTemp.innerText = fahrenheitToCelsius(apparentTemp.innerText);
  dayMaxElements.forEach(
    (el) => (el.innerText = fahrenheitToCelsius(el.innerText))
  );
  dayMinElements.forEach(
    (el) => (el.innerText = fahrenheitToCelsius(el.innerText))
  );
  hourTempElements.forEach(
    (el) => (el.innerText = fahrenheitToCelsius(el.innerText))
  );
};

const changeWindSpeedToKmhForAllElements = () => {
    const windElement = getCurrentWeatherElements().windElement;
    const windElementUnit = getCurrentWeatherElements().windElementUnit;

    windElement.innerText = mphToKmh(windElement.innerText);
    windElementUnit.nodeValue = 'Km/h';
}


const changeWindSpeedToMphForAllElements = () => {
        const windElement = getCurrentWeatherElements().windElement;
        const windElementUnit = getCurrentWeatherElements().windElementUnit;

        windElement.innerText = kmhToMph(windElement.innerText);
        windElementUnit.nodeValue = 'Mph';
}


const addSelectedIconAndClass = (element, i) => {
  element.append(checkMarkIcons[i]);
  element.classList.add("selected");
};

const dropdownCallbacks = (e) => {
  if (
    !temperatureCel.classList.contains("selected") &&
      (e.target === temperatureCel ||
    e.target.parentElement === temperatureCel)
  ) {
    changeTempToCelForAllElements();
    addSelectedIconAndClass(temperatureCel, 0);
    temperatureFar.classList.remove("selected");
  } else if (
    !temperatureFar.classList.contains("selected") &&
      (e.target === temperatureFar ||
    e.target.parentElement === temperatureFar)
  ) {
    changeTempToFarForAllElements();
    addSelectedIconAndClass(temperatureFar, 0);
    temperatureCel.classList.remove("selected");
  }else if (
    !windspeedKmh.classList.contains("selected") &&
      (e.target === windspeedKmh ||
    e.target.parentElement === windspeedKmh)
  ) {
    changeWindSpeedToKmhForAllElements();
    addSelectedIconAndClass(windspeedKmh, 1);
    windspeedMph.classList.remove("selected");
  }else if (
    !windspeedMph.classList.contains("selected") &&
      (e.target === windspeedMph ||
    e.target.parentElement === windspeedMph)
  ) {
    changeWindSpeedToMphForAllElements();
    addSelectedIconAndClass(windspeedMph, 1);
    windspeedKmh.classList.remove("selected");
  }
};




iconDropdown.addEventListener("click", showUnitDropDown);
dropdownContainer.addEventListener("click", dropdownCallbacks);
