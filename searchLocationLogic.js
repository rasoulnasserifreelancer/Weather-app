import { hideErrorAccessingLocationElement, setWetherInfo, showWeatherInfoElements } from "./app.js";
import { getCurrentLonAndLatByCity, getwetherinfo, NotFoundError } from "./getApiData.js";
import { getCurrentWeatherElements } from "./getElements.js";

const searchLocationBtnElement = document.getElementById("search_btn");
const searchLocationSearchElement = document.getElementById("search_input");
const SearchResultContainerElement = document.getElementById('search-container-result');


console.log("running searchlocationlogic.js")

const getResultOfSearch = async (e) => {
  if (e.target.value.length >= 3) {
    try {
      const result = await getCurrentLonAndLatByCity(e.target.value);
      console.log(result);
      showResult(result);
    } catch (error) {
      if (error instanceof NotFoundError) {
        showResult(error.message);
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

const showResult = (result) => {
  console.log("running show result")
  console.log(typeof result)
  const searchResult = document.createElement("div");

  const searchContainerResult = document.getElementById(
    "search-container-result"
  );

  searchContainerResult.innerHTML = "";

  if (typeof result === "string") {
    searchResult.innerHTML = `<p>${result}</p>`;
  } else {
    console.log(result.cities.map((name) => `<p>${name}</p>`).join("</br>"));
    searchResult.innerHTML = result.cities
      .map((name) => `<p>${name}</p>`)
      .join(" ");
    // Array.from(searchResult.children).map((elem, index) => {
    //   elem.dataset.latitude = result.latitudes[index];
    //   elem.dataset.longitude = result.longitudes[index];
    // });
    addPropertiesToPs(searchResult.children, result)
  }
  searchContainerResult.append(searchResult);
};

const deleteResult = () => {
  const searchContainerResult = document.getElementById(
    "search-container-result"
  );

  searchContainerResult.innerHTML = "";
};

const addPropertiesToPs = (Searchcontainer, apiResponse) => {
  Array.from(Searchcontainer).map((elem, index) => {
    elem.dataset.latitude = apiResponse.latitudes[index];
    elem.dataset.longitude = apiResponse.longitudes[index];
    elem.dataset.city = apiResponse.cities[index];
    elem.dataset.country = apiResponse.contries[index];
  });
};


SearchResultContainerElement.addEventListener('click', async (e)=> {
  console.log(typeof e.target.tagName)
  console.log(e.target.tagName)
  if(e.target.tagName == 'P'){
    try {
      searchLocationSearchElement.value = e.target.textContent;
      const cityLatitude = e.target.dataset.latitude;
      const cityLongitude = e.target.dataset.longitude;
      const cityName = e.target.dataset.city;
      const countryName = e.target.dataset.country;
      const weatherInfo = await Promise.all(getwetherinfo(cityLatitude, cityLongitude));
      deleteResult();
      console.log(weatherInfo);
      setWetherInfo(weatherInfo);
      hideErrorAccessingLocationElement();
      showWeatherInfoElements();
      SetLocation(cityName, countryName);
    } catch (error) {
      
    }
  }

})


const SetLocation = (city, country) => {
  getCurrentWeatherElements().locationElement.innerHTML = `${city}, ${country}`
}