// import { getCurrentWeather } from "./getApiData";
import {
  getCurrentWeatherElements,
  getDailyWeatherElements,
  getHourlyWeatherElements,
} from "./getElements.js";

export const setLoadingState = () => {
  addLoadingStateToCurrentWeatherPosterElement();
  addLoadingStateTocurrentWeatherDetailAPIInformationElement();
  addLoadingStateToDayElements();
  addLoadingStateToHourlyElements();
};

export const removeLoadingState = () => {
  removeLoadingStateOfCurrentWeatherPosterElement();
  removeLoadingStateOfcurrentWeatherDetailAPIInformationElement();
  removeLoadingStateOfDayElements();
  removeLoadingStateOfHourlyElements();
};

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
              <span id="location" class="location"></span>
              <span id="date" class="date"></span>
            </div>
            <div class="wether_info_current_poster_city_degree_icon">
              <div
                class="wether_info_current_poster_city_location_degree_icon_icon"
              >
                <img src="../assets/images/icon-sunny.webp" alt="" />
              </div>
              <span class="deg"><span id="deg"></span><sup>°</sup></span>
            </div>`;
  currentWeatherPosterElement.classList.remove("loading");
};

const addLoadingStateTocurrentWeatherDetailAPIInformationElement = () => {
  const currentWeatherDetailAPIInformationElement =
    getCurrentWeatherElements().currentWeatherDetailAPIInformationElement;
  currentWeatherDetailAPIInformationElement.forEach((element) => {
    element.innerHTML = "-";
  });
};

const removeLoadingStateOfcurrentWeatherDetailAPIInformationElement = () => {
  const currentWeatherDetailAPIInformationElement =
    getCurrentWeatherElements().currentWeatherDetailAPIInformationElement;
  currentWeatherDetailAPIInformationElement.forEach((element, index) => {
    switch (index) {
      case 0:
        element.innerHTML = `<span>
            <span id="apparent-temp"></span>&deg;
          </span>`;
        break;
      case 1:
        element.innerHTML = `  <span>
            <span id="humidity"></span>%
          </span>`;
        break;
      case 2:
        element.innerHTML = ` <span>
            <span id="wind"></span> km/h
          </span>`;
        break;
      case 3:
        element.innerHTML = `<span>
            <span id="precipitation"></span> mm
          </span>`;
        break;
      default:
        break;
    }
  });
};

const addLoadingStateToDayElements = () => {
  const dayElements = getDailyWeatherElements().DayElements;
  dayElements.forEach((day) => (day.innerHTML = ""));
};

const removeLoadingStateOfDayElements = () => {
  const dayElements = getDailyWeatherElements().DayElements;
  dayElements.forEach(
    (day) =>
      (day.innerHTML = `              <p></p>
              <div class="wether_info__daily_forecast_day_icon">
                <img src="" alt="" />
              </div>
              <div class="wether_info__daily_forecast_day_minmax">
                <span><span class="min"></span>&deg;</span>
                <span><span class="max"></span>&deg;</span>
              </div>`)
  );
};

const addLoadingStateToHourlyElements = () => {
  const currentDayElement = getHourlyWeatherElements().CurrentDayElement;
  currentDayElement.innerHTML = `<option value="-">-</option>`;
  const hourlyDayElements = getHourlyWeatherElements().HourlyDayElements;
  hourlyDayElements.forEach((day) => (day.innerHTML = ""));
};

const removeLoadingStateOfHourlyElements = () => {
  const currentDayElement = getHourlyWeatherElements().CurrentDayElement;
  currentDayElement.innerHTML = `
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>
              <option value=""></option>`;
  const hourlyDayElements = getHourlyWeatherElements().HourlyDayElements;
  hourlyDayElements.forEach(
    (day) =>
      (day.innerHTML = `
                 <div class="wether_info__hourly_detail_day-condition">
                <div class="wether_info__hourly_detail_day-condition-icon">
                  <img src="" alt="" />
                </div>
                <p></p>
              </div>
              <div class="wether_info__hourly_detail_day-condition_temp">
                <span> <span class="temp"></span>&deg; </span>
              </div>
                `)
  );
};
