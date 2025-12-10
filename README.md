# Frontend Mentor - Weather app solution

This is a solution to the [Weather app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/weather-app-K1FhddVm49). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- Search for weather information by entering a location in the search bar
- View current weather conditions including temperature, weather icon, and location details
- See additional weather metrics like "feels like" temperature, humidity percentage, wind speed, and precipitation amounts
- Browse a 7-day weather forecast with daily high/low temperatures and weather icons
- View an hourly forecast showing temperature changes throughout the day
- Switch between different days of the week using the day selector in the hourly forecast section
- Toggle between Imperial and Metric measurement units via the units dropdown 
- Switch between specific temperature units (Celsius and Fahrenheit) and measurement units for wind speed (km/h and mph) and precipitation (millimeters) via the units dropdown
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![desktop version metric](./design/desktop-metric.png)
![desktop version imperial](./design/desktop-imperial.png)
![mobile version](./design/mobile.png)
![Error Access Location](./design/error.png)
![city not found](./design/city-not-found-search.png)
![loading state](./design/loading.png)
![search result](./design/search-result.png)
![unit dropdown](./design/dropdown.png)


### Links

- Solution URL: [(https://github.com/rasoulnasserifreelancer/Frontend-Mentor-Weather-app/)]
- Live Site URL: [(https://frontend-mentor-weather-app-omega.vercel.app/)]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- desktop-first workflow
- vanilla js
- browser web API's including fetch API-DOM API-Geolocation API

### What I learned

I explored how to work with the navigator.geolocation API in JavaScript. I learned how to request the user’s location, handle permissions, and retrieve latitude and longitude coordinates. I also practiced managing success and error callbacks, which helped me understand how browsers enforce secure origins (HTTPS) for geolocation. This gave me a clearer picture of how client-side applications can integrate location-based features responsibly and effectively.

I experimented with ARIA attributes to improve accessibility in my UI. Specifically, I added the role="dialog" to my error element so it could behave like an overlay. This helped me understand how ARIA roles communicate component purpose to assistive technologies, and how overlays can be made more accessible by giving them a clear semantic role. Working with ARIA also showed me the importance of pairing visual behavior with proper accessibility metadata.

```html
    <div class="error-element" id="backdrop">
      <div
        class="error-element-inside"
        aria-modal="true"
        role="dialog"
        aria-labelledby="dialog-lable"
      >
        <h2 id="dialog-lable"></h2>
        <div id="close-error-btn">
          <img role="button" tabindex="0" width="50" height="50" />
        </div>
      </div>
    </div>
```


### Explanation of this function 
this function takes an element and recursively returns all nodes inside it,
it takes the element itself and an empty list as list of all nodes
```js
const getAllNodes = (element, allNodes=[]) => {
  for (let node of element.childNodes) {
    allNodes.push(node);
    if (node.childNodes.length > 0) {
      allNodes = getAllNodes(node, allNodes);
    }
  }
  return allNodes
}

```

## Author

-Linkdin [Rasoul Nasseri](https://www.linkedin.com/in/rasoul-naseri/)
- Frontend Mentor - [@rasoulnasserifreelancer](https://www.frontendmentor.io/profile/rasoulnasserifreelancer)
- github - [@rasoulnasserifreelancer](https://github.com/rasoulnasserifreelancer)
