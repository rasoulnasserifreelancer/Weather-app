const sunnySky = "./assets/images/icon-sunny.webp";
const partlycloudySky = "./assets/images/icon-partly-cloudy.webp";
const overcastSky = "./assets/images/icon-overcast.webp";
const snowySky = "./assets/images/icon-snow.webp";
const rainySky = "./assets/images/icon-rain.webp";
const stormSky = "./assets/images/icon-storm.webp";
const fogySky = "./assets/images/icon-fog.webp";
const drizzleSky = "./assets/images/icon-drizzle.webp";

console.log("running getapidata.js");

export class NotFoundError extends Error {}

const wethercode = {
  0: sunnySky,
  1: partlycloudySky,
  2: partlycloudySky,
  3: overcastSky,
  45: fogySky,
  48: fogySky,
  56: drizzleSky,
  61: rainySky,
};

export const matchWetherCodeToIcon = (code) => {
  switch (code) {
    case 0:
      return sunnySky;
    case 1:
    case 2:
      return partlycloudySky;
    case 3:
      return overcastSky;
    case 45:
    case 48:
      return fogySky;
    case 51:
    case 55:
    case 56:
    case 57:
    case 53:
      return drizzleSky;
    case 61:
    case 63:
    case 65:
    case 66:
    case 67:
    case 80:
    case 81:
    case 82:
      return rainySky;
    case 71:
    case 73:
    case 75:
    case 77:
    case 85:
    case 86:
      return snowySky;
    case 95:
    case 96:
    case 99:
      return stormSky;
  }
};

export const getCurrentWeather = async (latitude, Longitude) => {
  console.log("running getcurrent wether ...");

  console.log(latitude, Longitude, "in getwetherinfo module");
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${Longitude}&current=temperature_2m,apparent_temperature,precipitation,wind_speed_10m,relative_humidity_2m,cloud_cover,weather_code&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) {
      const error = await response.json();
      throw error;
    } else {
      const result = await response.json();
      return result.current;
    }
  } catch (error) {
    if (error.error) {
      return `${error.reason}`;
    } else {
      throw error;
    }
  }
};

export const getDailyWeather = async (latitude, longitude) => {
  console.log("running Daily wether ...");

  console.log(latitude, longitude, "in getwetherinfo module");
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) {
      const error = await response.json();
      throw error;
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    if (error.error) {
      return `${error.reason}`;
    } else {
      throw error;
    }
  }
};

export const getHourlyWeather = async (latitude, longitude) => {
  console.log("running Daily wether ...");

  console.log(latitude, longitude, "in getwetherinfo module");
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) {
      const error = await response.json();
      throw error;
    } else {
      const result = await response.json();
      return result;
    }
  } catch (error) {
    if (error.error) {
      return `${error.reason}`;
    } else {
      throw error;
    }
  }
};

export const getwetherinfo = (latitude, longitude) => {
  return [
    getCurrentWeather(latitude, longitude),
    getDailyWeather(latitude, longitude),
    getHourlyWeather(latitude, longitude),
  ];
};

export const getCurrentCityByLonAndLat = async (latitude, longitude) => {
  console.log("running getcurrent city ...");
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=98daf9091ea147d7aebc14fc4afda562`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.results[0]);
    const city = result?.results[0]?.components?.city;
    const country = result?.results[0]?.components?.country;
    if (!city || !country) {
      throw new NotFoundError("location not found");
    }
    return { city, country };
  } catch (err) {
    if (err instanceof NotFoundError) {
      return err.message;
    }
    throw err;
  }
};

export const getCurrentLonAndLatByCity = async (city) => {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=4&language=en&format=json`
    );
    const result = await response.json();
    const cities = result?.results.map((result) => result.name);
    const latitudes = result?.results.map((result) => result.latitude);
    const longitudes = result?.results.map((result) => result.longitude);
    const contries = result?.results.map((result) => result.country);
    if (cities.length === 0) {
      throw new NotFoundError("city not found");
    }
    return { cities, latitudes, longitudes, contries };
  } catch (error) {
    console.error(error)
    throw error;
  }
};
