export const getCurrentWeatherElements = () => {
  const CurrentWeatherElement = document.querySelector(".wether_info__current");
  const CurrentWeatherPosterElement = document.querySelector(
    ".wether_info_current_poster_city"
  );
  const CurrentWeatherDetailElement = document.querySelector(
    ".wether_info_current_detail"
  );

  const currentWeatherDetailAPIInformationElement = document.querySelectorAll(
    ".wether_info_current_detail > * > *:last-child"
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
  console.log(windElement);
  const windElementUnit = windElement?.nextSibling;
  const precipitationElement = document.getElementById("precipitation");

  return {
    CurrentWeatherElement,
    CurrentWeatherPosterElement,
    CurrentWeatherDetailElement,
    currentWeatherDetailAPIInformationElement,
    poster_weather_city_icon,
    locationElement,
    dateElement,
    degElement,
    apparentTemp,
    humidityElement,
    windElement,
    windElementUnit,
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
  const errorElement = document.querySelector(
    ".error-element"
  );
  const ErrorDialogLable = errorElement
    ? errorElement.querySelector("h2")
    : null;

  const ErrorBtn = document.querySelector('#close-error-btn img');
  return {
    errorElement,
    ErrorDialogLable,
    ErrorBtn
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

export const getSearchLocationElements = () => {
  const searchContainerResult = document.getElementById(
    "search-container-result"
  );
  return {searchContainerResult}
}

export const getDropdownElements = () => {
  const dropdown = document.querySelector("#dropdown");
  const iconDropdown = document.querySelector("#icon-dropdown");
  const dropdownUnitList = document.querySelector("#dropdown-unit");

  // System switch
  const systemSwitch = document.querySelector("#system");

  // Temperature options
  const temperatureCel = document.querySelector("#temperature-cel");
  const temperatureFar = document.querySelector("#temperature-far");

  // Wind speed options
  const windspeedKmh = document.querySelector("#windspeed-kmh");
  const windspeedMph = document.querySelector("#windspeed-mph");

  // Precipitation options
  const precipitationMm = document.querySelector("#precipitation-mm");
  const precipitationIn = document.querySelector("#precipitation-in");

  // Titles for each unit section
  const unitTitles = document.querySelectorAll(".unit_title");

  // All unit list items
  const unitItems = document.querySelectorAll(".unit");

  const checkMarkIcons = document.querySelectorAll(".unit img");
  return {
    dropdown,
    iconDropdown,
    dropdownUnitList,
    systemSwitch,
    temperatureCel,
    temperatureFar,
    windspeedKmh,
    windspeedMph,
    precipitationMm,
    precipitationIn,
    unitTitles,
    unitItems,
    checkMarkIcons
  };
};



export const mainContent = document.getElementById('main-content');