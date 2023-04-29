import { elementMaps } from "../utils/elementMaps.js";

const getOpenWeather = (lat, lon) => {
  return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=cc899ff07e1cdf8cd42fe037272216fb`;
};

export const openweather = async (lat, lon) => {
  const response = await fetch(getOpenWeather(lat, lon)).then((res) =>
    res.json()
  );
  return response;
};

const getGeoLocation = (options) => {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

let weatherInfo = {
  city : "",
  temp : 0,
  backgroundImage : "",
}

export async function getWeatherInfo() {
  try {
    const { coords } = await getGeoLocation();
    const res = await openweather(coords.latitude, coords.longitude);
    console.log(res);
    weatherInfo.city = res.name;
    // elementMaps.weatherTemp.innerHTML = res.main.temp + "°C";
    weatherInfo.temp = res.main.temp;
    weatherInfo.backgroundImage = `https://openweathermap.org/img/w/${res.weather[0].icon}.png`;
    console.log(weatherInfo);
    return weatherInfo;
  } catch (err) {
    console.error(err);
  }
}