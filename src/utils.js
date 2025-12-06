export const addPropertiesToPs = (Searchcontainer, apiResponse) => {
  Array.from(Searchcontainer).map((elem, index) => {
    elem.dataset.latitude = apiResponse.latitudes[index];
    elem.dataset.longitude = apiResponse.longitudes[index];
    elem.dataset.city = apiResponse.cities[index];
    elem.dataset.country = apiResponse.contries[index];
  });
};


export const getAllNodes = (element, allNodes) => {
  for (let node of element.childNodes) {
    allNodes.push(node);
    if (node.childNodes.length > 0) {
      allNodes = getAllNodes(node, allNodes);
    }
  }
  return allNodes
}