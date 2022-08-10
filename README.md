# IP Address Tracker

A simple IP Address Tracker that accepts user's input, which should be in form of IP address, and returns main location data of that IP Address and displays it, such as location, timezone and ISP. Based on that location, a map is generated on the screen too. It also returns an alert if address is not valid. It's an intermediate project on [Frontend Mentor](https://frontendmentor.io/).
To get the IP Address locations, I used the [IP Geolocation API by IPify](https://geo.ipify.org/). To generate the map, I used [LeafletJS](https://leafletjs.com/).
To use the IP Geolocation API by IPify, you'll need to sign up for a free account. You won't need to add any cards details to do this and it's a very quick process. This will generate an API Key for you. Usually, you would be able to restrict your API Key to a specific URL (your own domain).

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [Process](#process)
  - [Built with](#built-with)
  - [Useful resources](#useful-resources) 
- [Author](#author)

## Overview

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements on the page
- See their own IP address on the map on the initial page load
- Search for any IP addresses or domains and see the key information and location

### Screenshot

- Desktop and mobile design screenshots:

![](./images/screenshot1.jpg)
![](./images/screenshot2.jpg)

### Links

- Live Site URL: [IP Address Tracker](https://jelenkoo10.github.io/ip_address_tracker/)

## Process

### Built with

- Semantic HTML5 markup
- CSS variables
- Flexbox
- Asynchronous JavaScript
- Regular expressions
- Mobile-first workflow
- [LeafletJS](https://leafletjs.com/) - JS library for generating maps
- [IP Geolocation API by IPify](https://geo.ipify.org/) - API for getting IP address locations

### Useful resources

- [Leaflet API Documentation](https://leafletjs.com/reference.html) - This one really helped me to build my first map in JS, it is full of examples and awesome features. I really liked this pattern and will use it going forward.
- [How To Get a User's IP Address With JavaScript](https://www.youtube.com/watch?v=XG-BtJv3UnU) - A simple and really helpful video on how to get your own device's IP Address with one simple fetch request. It helped me to see my own IP address on the map on the initial page load.

## Author

- GitHub - [https://github.com/jelenkoo10](https://github.com/jelenkoo10)
- Frontend Mentor - [@jelenkoo10](https://www.frontendmentor.io/profile/jelenkoo10)

