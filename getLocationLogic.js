import { setWetherInfo } from "./app.js";
import { getCurrentCityByLonAndLat, getwetherinfo } from "./getApiData.js";

let weatherInfoGotByUserLocation;




export const setPsitionCallbck = async (pos) => {
  let currentLatitude = pos.coords.latitude;
  let currentLlongitude = pos.coords.longitude;
  hideErrorAccessingLocationElement();
  try {
    currentLocation = await getCurrentCityByLonAndLat(
      currentLatitude,
      currentLlongitude
    );

    weatherInfoGotByUserLocation = await Promise.all(
      getwetherinfo(currentLatitude, currentLlongitude)
    );
    setWetherInfo(weatherInfoGotByUserLocation);
  } catch (error) {
    console.log(error);
    throw error;
  }
};


export const getweatherInfoGotByUserLocation = () => weatherInfoGotByUserLocation