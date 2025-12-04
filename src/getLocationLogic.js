import { getwetherinfo } from "./getApiData.js";


export const getweatherInfoGotByUserLocation = async(currentLatitude,currentLlongitude) => {
    let weatherInfoGotByUserLocation = await Promise.all(
      getwetherinfo(currentLatitude, currentLlongitude)
    );
    return weatherInfoGotByUserLocation
}