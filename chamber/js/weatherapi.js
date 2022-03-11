const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5782391&units=imperial&appid=0abbbbf1b3af22801480d87a6b128ad3";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsonObject) => {
    console.table(jsonObject);
    let temp = document.querySelector('#current-temp');
    temp.textContent = jsonObject.main.temp.toFixed(1);
    const iconsrc= `https://openweathermap.org/img/w/${jsonObject.weather[0].icon}.png`;
    const desc = jsonObject.weather[0].description;
    document.querySelector('#icon-src').textContent = iconsrc;
    document.querySelector('#weathericon').setAttribute('src', iconsrc);
    document.querySelector('#weathericon').setAttribute('alt', desc);
    document.querySelector('figcaption').textContent = desc;
});