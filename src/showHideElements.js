import { getCurrentWeatherElements, getDailyWeatherElements, getErrorElement, getHourlyWeatherElements, mainContent, getSearchLocationElements, getSearchElemensts, getDropdownElements } from "./getElements.js";
import { addPropertiesToPs } from "./utils.js";

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


export const showLocationSearchResult = (result) => {
  const searchResult = document.createElement("div");
  const SearchResultContainerElement = getSearchElemensts().SearchResultContainerElement;
  
  SearchResultContainerElement.innerHTML = "";

  if (typeof result === "string") {
    searchResult.innerHTML = `<p>${result}</p>`;
  } else {
    console.log(result.cities.map((name) => `<p>${name}</p>`).join("</br>"));
    searchResult.innerHTML = result.cities
      .map((name) => `<p>${name}</p>`)
      .join(" ");
    addPropertiesToPs(searchResult.children, result);
  }
  SearchResultContainerElement.append(searchResult);
};



export const hideLocationSearchResult = (e) => {
  console.log(e.target);
  const searchContainerResult =  getSearchLocationElements().searchContainerResult; 
  if (e.target !== searchContainerResult && e.target.parentNode !== searchContainerResult) {
    searchContainerResult.innerHTML = '';
  }
}


export const showUnitDropDown = () => {
  const dropdownUnitList = getDropdownElements().dropdownUnitList;
  dropdownUnitList.classList.add('show');
}
export const hideUnitDropDown = () => {
  const dropdownUnitList = getDropdownElements().dropdownUnitList;
    dropdownUnitList.classList.remove('show');

}
