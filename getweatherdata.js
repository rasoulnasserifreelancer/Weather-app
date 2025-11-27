const sunnySky = "./assets/images/icon-sunny.webp";
const partlycloudySky = "./assets/images/icon-partly-cloudy.webp";
const overcastSky = "./assets/images/icon-overcast.webp";
const snowySky = "./assets/images/icon-snow.webp";
const rainySky = "./assets/images/icon-rain.webp";
const stormSky = "./assets/images/icon-storm.webp";
const fogySky = "./assets/images/icon-fog.webp";
const drizzleSky = "./assets/images/icon-drizzle.webp";


class NotFoundError extends Error {}

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


export const matchWetherCodeToIcon = (code)=>{
    switch(code) {
      case 0 :
        return sunnySky;
      case 1,2 : 
      return partlycloudySky;
      case 3 : 
      return overcastSky;
      case 45, 48 :
        return fogySky;
      case 51, 53, 55, 56, 57 : 
      return drizzleSky;
      case 61, 63, 65, 66, 67, 80, 81, 82 :
        return rainySky
      case 71, 73, 75, 77, 85, 86 : 
      return snowySky
      case 95, 96, 99 :
        return stormSky
    }
}


export const getCurrentWeather = async (latitude, Longitude) => {
    console.log("running getcurrent wether ...")

  console.log(latitude, Longitude, "in getwetherinfo module")
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${Longitude}&current=temperature_2m,apparent_temperature,precipitation,wind_speed_10m,relative_humidity_2m,cloud_cover,weather_code`;
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
}


export const getCurrentCityByLonAndLat = async(latitude, longitude) => {
  console.log("running getcurrent city ...")
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}%2C+${longitude}&key=98daf9091ea147d7aebc14fc4afda562`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    console.log(result.results[0])
    const city = result?.results[0]?.components?.city
    const country = result?.results[0]?.components?.country
    if (!city || !country) {
      throw new NotFoundError("location not found")
    }
    return {city, country}
  }catch(err){
    if (err instanceof NotFoundError) {
      return err.message
    }
    throw err
  }
}