export const addPropertiesToPs = (Searchcontainer, apiResponse) => {
  Array.from(Searchcontainer).map((elem, index) => {
    elem.dataset.latitude = apiResponse.latitudes[index];
    elem.dataset.longitude = apiResponse.longitudes[index];
    elem.dataset.city = apiResponse.cities[index];
    elem.dataset.country = apiResponse.contries[index];
  });
};