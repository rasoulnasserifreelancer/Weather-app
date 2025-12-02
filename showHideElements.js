import { getCurrentWeatherElements, getDailyWeatherElements, getErrorElement, getHourlyWeatherElements } from "./getElements.js";
console.log("showhideelements.js module");

export const hideWeatherInfoElements = () => {
  getCurrentWeatherElements().CurrentWeatherElement.style.display = "none";
  getDailyWeatherElements().DailyElement.style.display = "none";
  getHourlyWeatherElements().HourlyElement.style.display = "none";
};

export const showWeatherInfoElements = () => {
  console.log("show weather info elements")
  getCurrentWeatherElements().CurrentWeatherElement.style.display = "flex";
  getDailyWeatherElements().DailyElement.style.display = "flex";
  getHourlyWeatherElements().HourlyElement.style.display = "block";
};

export const showErrorElement = (message) => {
  const errElementContainer = getErrorElement().ErrorLocationContainer;
  errElementContainer.style.display ="flex";
  errElementContainer.style.opacity = "1" ;
  errElementContainer.focus()
  const messageContainer = getErrorElement().ErrorLocationMessage;
  messageContainer.innerText = message
};

export const hideErrorElement = () => {
  console.log("running hide Error Location accessing");
  getErrorElement().ErrorLocationContainer.style.display =
    "none";
};

export const showDailyElement = (element) => {
  element.style.display = "flex";
};

export const hideDailyElement = (element) => {
  element.style.display = "none";
};
