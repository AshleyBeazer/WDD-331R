const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=4348599&units=imperial&appid=0abbbbf1b3af22801480d87a6b128ad3";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    let t = parseFloat(jsObject.main.temp);
    let s = parseFloat(jsObject.wind.speed);
    let output = "N/A";

    const iconsrc= `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;

    document.getElementById("weather").innerHTML =
      jsObject.weather[0].description;
    document.getElementById("current-temp").innerHTML =
      Math.round(t) + "&#8457;";
    if (t <= 50 && s >= 3) {
      let f =
        35.74 +
        0.6215 * t -
        35.75 * Math.pow(s, 0.16) +
        0.4275 * (t * Math.pow(s, 0.16));
      output = Math.round(f);
    }
    document.getElementById("output").innerHTML = output + "&#8457;";
    document.getElementById("humidity").innerHTML =
      jsObject.main.humidity + "&#37;";
    document.getElementById("speed").innerHTML = Math.round(s) + " mph";

    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
  });