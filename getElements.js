export const getCurrentWeatherElements = () => {
  const CurrentWeatherElement = document.querySelector(".wether_info__current");
  const CurrentWeatherPosterElement = document.querySelector(
    ".wether_info_current_poster_city"
  );
  const CurrentWeatherDetailElement = document.querySelector(
    ".wether_info_current_detail"
  );
  const poster_weather_city_icon = document.querySelector(
    ".wether_info_current_poster_city_location_degree_icon_icon img"
  );
  const locationElement = document.getElementById("location");
  const dateElement = document.getElementById("date");
  const degElement = document.getElementById("deg");
  const apparentTemp = document.getElementById("apparent-temp");
  const humidityElement = document.getElementById("humidity");
  const windElement = document.getElementById("wind");
  const precipitationElement = document.getElementById("precipitation");

  return {
    CurrentWeatherElement,
    CurrentWeatherPosterElement,
    CurrentWeatherDetailElement,
    poster_weather_city_icon,
    locationElement,
    dateElement,
    degElement,
    apparentTemp,
    humidityElement,
    windElement,
    precipitationElement,
  };
};

export const getDailyWeatherElements = () => {
  const DailyElement = document.querySelector(".wether_info__daily");
  const DailyForecastContainer = document.querySelector(
    ".wether_info__daily_forecast"
  );

  // Each day card
  const DayElements = document.querySelectorAll(
    ".wether_info__daily_forecast_day"
  );

  // Per-day sub-elements (NodeList order matches DayElements)
  const dayNameElements = document.querySelectorAll(
    ".wether_info__daily_forecast_day > p"
  );
  const dayIconImgs = document.querySelectorAll(
    ".wether_info__daily_forecast_day_icon img"
  );
  const dayMinElements = document.querySelectorAll(
    ".wether_info__daily_forecast_day_minmax .min"
  );
  const dayMaxElements = document.querySelectorAll(
    ".wether_info__daily_forecast_day_minmax .max"
  );

  return {
    DailyElement,
    DailyForecastContainer,
    DayElements,
    dayNameElements,
    dayIconImgs,
    dayMinElements,
    dayMaxElements,
  };
};

export const getHourlyWeatherElements = () => {
  const HourlyElement = document.querySelector(".wether_info__hourly");
  const HourlyTitleElement = document.querySelector(
    ".wether_info__hourly_title"
  );
  const CurrentDayElement = document.getElementById("day");

  const allDaysElements = document.querySelectorAll("#day option");
  const HourlyDetailContainer = document.querySelector(
    ".wether_info__hourly_detail"
  );

  // Each hourly card
  const HourlyDayElements = document.querySelectorAll(
    ".wether_info__hourly_detail_day"
  );

  // Per-hour sub-elements (NodeList order matches HourlyDayElements)
  const hourTimeElements = document.querySelectorAll(
    ".wether_info__hourly_detail_day > .wether_info__hourly_detail_day-condition > p"
  );
  const hourIconImgs = document.querySelectorAll(
    ".wether_info__hourly_detail_day-condition-icon img"
  );
  const hourTempElements = document.querySelectorAll(
    ".wether_info__hourly_detail_day-condition_temp .temp"
  );

  return {
    CurrentDayElement,
    HourlyElement,
    HourlyTitleElement,
    allDaysElements,
    HourlyDetailContainer,
    HourlyDayElements,
    hourTimeElements,
    hourIconImgs,
    hourTempElements,
  };
};

export const getErrorElement = () => {
  const ErrorLocationContainer = document.querySelector(
    ".error-element"
  );
  const ErrorLocationMessage = ErrorLocationContainer
    ? ErrorLocationContainer.querySelector("h2")
    : null;

  return {
    ErrorLocationContainer,
    ErrorLocationMessage,
  };
};


export const getSearchElemensts = () => {
  const searchLocationBtnElement = document.getElementById("search_btn");
const searchLocationSearchElement = document.getElementById("search_input");
const SearchResultContainerElement = document.getElementById(
  "search-container-result"
);
return {
  searchLocationBtnElement, searchLocationSearchElement, SearchResultContainerElement
}
}