import { getCurrentWeatherElements, getDailyWeatherElements, getErrorElement, getHourlyWeatherElements, mainContent } from "./getElements.js";

export const hideWeatherInfoElements = () => {
  getCurrentWeatherElements().CurrentWeatherElement.style.display = "none";
  getDailyWeatherElements().DailyElement.style.display = "none";
  getHourlyWeatherElements().HourlyElement.style.display = "none";
};

export const showWeatherInfoElements = () => {
  getCurrentWeatherElements().CurrentWeatherElement.style.display = "flex";
  getDailyWeatherElements().DailyElement.style.display = "flex";
  getHourlyWeatherElements().HourlyElement.style.display = "block";
};

export const showErrorElement = (message, src) => {
  const errElementContainer = getErrorElement().errorElement;
  const messageContainer = getErrorElement().ErrorDialogLable;
  const errElementBtn = getErrorElement().ErrorBtn;
  errElementBtn.src = src;
  mainContent.inert = true;
  errElementContainer.classList.add('show');
  errElementContainer.classList.remove('hide');
  errElementBtn.focus()
  messageContainer.innerText = message
};

export const hideErrorElement = () => {
  const errElementContainer = getErrorElement().errorElement;
  mainContent.inert = false;
  errElementContainer.classList.add('hide');
  errElementContainer.classList.remove('show');
  // errElementContainer.style.display ="none";
};

export const showDailyElement = (element) => {
  element.style.display = "flex";
};

export const hideDailyElement = (element) => {
  element.style.display = "none";
};
