const forecastURL =
  "https://api.openweathermap.org/data/2.5/forecast?id=4348599&units=imperial&appid=0abbbbf1b3af22801480d87a6b128ad3";
fetch(forecastURL)
  .then((response) => response.json())
  .then((forecastObject) => {
    var forecast = forecastObject.list.filter((x) =>
      x.dt_txt.includes("18:00:00")
    );
    const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    for (let day = 0; day < forecast.length; day++) {
      const d = new Date(forecast[day].dt_txt);
      const imagesrc =
        "https://openweathermap.org/img/wn/" +
        forecast[day].weather[0].icon +
        "@2x.png";
      const desc = forecast[day].weather[0].description;
      document.getElementById(`dayofweek${day + 1}`).textContent =
        weekdays[d.getDay()];
      document.getElementById(`forecast${day + 1}`).textContent = Math.round(
        forecast[day].main.temp
      );
      document.getElementById(`icon${day + 1}`).setAttribute("src", imagesrc);
      document.getElementById(`icon${day + 1}`).setAttribute("alt", desc);
    }
  });