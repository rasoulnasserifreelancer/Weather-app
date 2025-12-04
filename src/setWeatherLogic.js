import { matchWetherCodeToIcon } from "./getApiData.js";
import { getCurrentWeatherElements, getDailyWeatherElements, getHourlyWeatherElements } from "./getElements.js";
import { hideDailyElement, showDailyElement } from "./showHideElements.js";

export const setWetherInfo = (weatherInfo, location) => {
    console.log(weatherInfo)
  console.log("running setwether info callback");
  setCurrentWetherInfo(weatherInfo[0], location);
  setDailyWetherInfo(weatherInfo[1]);
  setHourlyWetherTitle(weatherInfo[2]);
  setHourlyWetherInfo(weatherInfo[2]);
};

const setCurrentWetherInfo = (res, location) => {
  console.log("running set current weather info, res is ", res,"location is:", location);
  console.log(getCurrentWeatherElements().precipitationElement)
  getCurrentWeatherElements().precipitationElement.innerText = `${
    res?.precipitation ?? "--"
  }`;
  getCurrentWeatherElements().windElement.innerText = `${
    res?.wind_speed_10m ?? "--"
  }`;
  getCurrentWeatherElements().humidityElement.innerText = `${
    res?.relative_humidity_2m ?? "--"
  }`;
  getCurrentWeatherElements().apparentTemp.innerText = `${
    res?.apparent_temperature ?? "--"
  }`;
  getCurrentWeatherElements().degElement.innerText = `${
    res?.temperature_2m ?? "--"
  }`;
  getCurrentWeatherElements().poster_weather_city_icon.src =
    matchWetherCodeToIcon(res?.weather_code);
  getCurrentWeatherElements().locationElement.innerText = `${
    location?.city ?? "--"
  }, ${location?.country ?? "--"}`;
  getCurrentWeatherElements().dateElement.innerText = `${
    new Date(res?.time)?.toDateString() ?? "--"
  }`;
};

const setDailyWetherInfo = (res) => {
  getDailyWeatherElements().dayNameElements.forEach((p, index) => {
    p.innerText = new Date(res.daily.time[index]).toString().split(" ")[0];
  });

  getDailyWeatherElements().dayMaxElements.forEach(
    (max, index) => (max.innerText = res.daily.temperature_2m_max[index])
  );

  getDailyWeatherElements().dayMinElements.forEach(
    (min, index) => (min.innerText = res.daily.temperature_2m_min[index])
  );

  getDailyWeatherElements().dayIconImgs.forEach((img, index) => {
    img.src = matchWetherCodeToIcon(res.daily.weather_code[index]);
  });
};

const setHourlyWetherTitle = (res) => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // const currentDay = weekDays[new Date(res.hourly.time[i]).getDay()];
  const currentDayIndex = new Date(res.hourly.time[0]).getDay();
  const weekDaysOptions = weekDays
    .slice(currentDayIndex)
    .concat(weekDays.slice(0, currentDayIndex));
  const allDaysElements = getHourlyWeatherElements().allDaysElements;
  allDaysElements.forEach((option, index) => {
    if (index === 0) option.selected = true;
    option.innerText = weekDaysOptions[index];
    option.value = weekDaysOptions[index];
  });
};

export const setHourlyWetherInfo = (res) => {
  const allDaysElements = getHourlyWeatherElements().allDaysElements;

  const weekDayMap = {
    Sunday: "Sun",
    Monday: "Mon",
    Tuesday: "Tue",
    Wednesday: "Wed",
    Thursday: "Thu",
    Friday: "Fri",
    Saturday: "Sat",
  };
  // console.log(res)

  let theDay = "";

  allDaysElements.forEach((option, index) => {
    if (option.selected) {
      theDay = weekDayMap[option.innerText];
      // console.log(theDay)
    }
  });

  const theDayDailyInfo = [];

  for (let i = 0; i < 168; i++) {
    if (
      new Date(res.hourly.time[i]).toString().split(" ")[0] == theDay &&
      theDayDailyInfo.length < 8 &&
      new Date(res.hourly.time[i]) > new Date()
    ) {
      theDayDailyInfo.push({
        time: new Date(res.hourly.time[i]).toLocaleTimeString(),
        temp: res.hourly.temperature_2m[i],
        code: res.hourly.weather_code[i],
      });
    }
  }

  getHourlyWeatherElements().HourlyDayElements.forEach((element, index) => {
    if (index >= theDayDailyInfo.length) {
      hideDailyElement(element);
    } else {
      showDailyElement(element);
    }
  });

  console.log(theDayDailyInfo);

  getHourlyWeatherElements().hourTimeElements.forEach((element, index) => {
    element.innerText = theDayDailyInfo[index]?.time?.replaceAll(":00", "");
  });

  getHourlyWeatherElements().hourIconImgs.forEach((element, index) => {
    element.src = matchWetherCodeToIcon(theDayDailyInfo[index]?.code);
  });

  getHourlyWeatherElements().hourTempElements.forEach((element, index) => {
    element.innerText = theDayDailyInfo[index]?.temp;
  });
};