
import {
  getCurrentLonAndLatByCity,
  getwetherinfo,
  NotFoundError,
} from "./getApiData.js";
import { getCurrentWeatherElements, getErrorElement, getSearchElemensts } from "./getElements.js";
import { setWetherInfo } from "./setWeatherLogic.js";
import { hideErrorElement, hideWeatherInfoElements, showErrorElement, showWeatherInfoElements, showLocationSearchResult } from "./showHideElements.js";


let weatherInfogotByUserSearch;

const searchLocationBtnElement = getSearchElemensts().searchLocationBtnElement;
const searchLocationSearchElement = getSearchElemensts().searchLocationSearchElement;
const SearchResultContainerElement = getSearchElemensts().SearchResultContainerElement;

console.log("running searchlocationlogic.js");

const getResultOfSearch = async (e) => {
  if (e.target.value.length >= 3) {
    try {
      const result = await getCurrentLonAndLatByCity(e.target.value);
      console.log(result);
      showLocationSearchResult(result);
    } catch (error) {
      if (error instanceof NotFoundError) {
        showLocationSearchResult(error.message);
      }else if(error instanceof TypeError){
        showErrorElement("network access error", "./assets/images/icon-retry.svg");
      }
    }
  }
  if (e.target.value.length <= 2) {
    deleteResult();
  }
};

const callbacks = {
  getResultOfSearch,
};

searchLocationSearchElement.addEventListener(
  "input",
  callbacks.getResultOfSearch
);

// const showLocationSearchResult = (result) => {
//   console.log("running show result");
//   console.log(typeof result);
//   const searchResult = document.createElement("div");

//   const searchContainerResult = document.getElementById(
//     "search-container-result"
//   );

//   searchContainerResult.innerHTML = "";

//   if (typeof result === "string") {
//     searchResult.innerHTML = `<p>${result}</p>`;
//   } else {
//     console.log(result.cities.map((name) => `<p>${name}</p>`).join("</br>"));
//     searchResult.innerHTML = result.cities
//       .map((name) => `<p>${name}</p>`)
//       .join(" ");
//     addPropertiesToPs(searchResult.children, result);
//   }
//   searchContainerResult.append(searchResult);
// };

const deleteResult = () => {
  const searchContainerResult = document.getElementById(
    "search-container-result"
  );

  searchContainerResult.innerHTML = "";
};



SearchResultContainerElement.addEventListener("click", async (e) => {
  console.log(typeof e.target.tagName);
  console.log(e.target.dataset);
  if (e.target.tagName == "P") {
    try {
      searchLocationSearchElement.value = e.target.textContent;
      const cityLatitude = e.target.dataset.latitude;
      const cityLongitude = e.target.dataset.longitude;
      const cityName = e.target.dataset.city;
      const countryName = e.target.dataset.country;
      const location = {city : cityName, country:countryName};
      weatherInfogotByUserSearch  = await Promise.all(
        getwetherinfo(cityLatitude, cityLongitude)
      );
      deleteResult();
      setWetherInfo(weatherInfogotByUserSearch, location);
      hideErrorElement();
      showWeatherInfoElements();
      // SetLocation(cityName, countryName);
    } catch (error) {
      console.log(error);
      if(error instanceof TypeError){
        showErrorElement("network access error", "../assets/images/icon-retry.svg");
      }else {
        showErrorElement(`${error.message}`, "../assets/images/icon-retry.svg");
      }
    }
  }
});

// const SetLocation = (city, country) => {
//   getCurrentWeatherElements().locationElement.innerHTML = `${city}, ${country}`;
// };


searchLocationBtnElement.addEventListener('click', async (e)=> {
    const inputValue = searchLocationSearchElement.value;
    try {
      const result = await getCurrentLonAndLatByCity(inputValue);
      const cityIndex = result?.cities?.findIndex((city) => city.toLowerCase() === inputValue.toLowerCase());
      if (result.cities || cityIndex !== -1){
        const city = result.cities[cityIndex];
        const country = result.contries[cityIndex];
        const location = {city, country}
        const latitude = result.latitudes[cityIndex];
        const longitude = result.longitudes[cityIndex];
        weatherInfogotByUserSearch = await Promise.all(getwetherinfo(latitude, longitude));
        deleteResult()
        setWetherInfo(weatherInfogotByUserSearch, location);
        // SetLocation(city, country);
        showWeatherInfoElements()
        // hideErrorElement();
      }else {
        // getErrorElement().ErrorDialogLable.innerText = "we couldn't find your city name, please try again ...";
        hideWeatherInfoElements();
        showErrorElement("we couldn't find your city name, please try again ...", "https://img.icons8.com/neon/96/delete-sign.png")
      }
    } catch (error) {
      if (error instanceof NotFoundError) {
        showErrorElement(`${error.message}`, "../assets/images/icon-retry.svg");
      }else if(error instanceof TypeError){
        showErrorElement("network access error", "../assets/images/icon-retry.svg");
      }else {
        showErrorElement(`${error.message}`, "../assets/images/icon-retry.svg");
      }
    }
})

export const getweatherInfoGotByUserSearch = () => weatherInfogotByUserSearch