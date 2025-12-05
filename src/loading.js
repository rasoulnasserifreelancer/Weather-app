// import { getCurrentWeather } from "./getApiData";
import { getCurrentWeatherElements } from "./getElements.js";

export const setLoadingState = () => {
    addLoadingStateToCurrentWeatherPosterElement()
};


export const removeLoadingState = () => {
    removeLoadingStateOfCurrentWeatherPosterElement()
}

const addLoadingStateToCurrentWeatherPosterElement = () => {
  const currentWeatherPosterElement =
    getCurrentWeatherElements().CurrentWeatherPosterElement;
  currentWeatherPosterElement.innerHTML =
    '<img width=60 height=40 src="../assets/images/icon-loading.svg"/><p>loading...</p>';

  currentWeatherPosterElement.classList.add("loading");
};

const removeLoadingStateOfCurrentWeatherPosterElement = () => {
  const currentWeatherPosterElement =
    getCurrentWeatherElements().CurrentWeatherPosterElement;
  currentWeatherPosterElement.innerHTML = `
            <div class="wether_info_current_poster_city_location_date">
              <span id="location"></span>
              <span id="date"></span>
            </div>
            <div class="wether_info_current_poster_city_degree_icon">
              <div
                class="wether_info_current_poster_city_location_degree_icon_icon"
              >
                <img src="../assets/images/icon-sunny.webp" alt="" />
              </div>
              <span><span id="deg"></span><sup>°</sup></span>
            </div>`;
  currentWeatherPosterElement.classList.remove("loading");
};

